import { delay } from "@common/index";
import { RecoilProfiles } from "./recoilProfiles";

let currentWeapon: number = 0;
let recoilTick: number = 0;
let mainTick: number = 0;

const VerticalRecoilEnabled: boolean = true;
const HorizontalRecoilEnabled: boolean = false;

on("onClientResourceStart", (name: string) => {
  if (name != GetCurrentResourceName()) return;

  startMainTick();

  RegisterCommand("recoil:enable", () => startMainTick(), true);
  RegisterCommand("recoil:disable", () => stopMainTick(), true);
});

function startMainTick(): void {
  mainTick = setTick(async () => {
    const [hasWeapon, weapon] = GetCurrentPedWeapon(PlayerPedId(), true);
    if (hasWeapon && currentWeapon !== weapon) {
      currentWeapon = weapon;
      startRecoilTick();
    } else if (!hasWeapon && currentWeapon !== 0) {
      currentWeapon = 0;
      stopRecoilTick();
    }
    await delay(500);
  });
}

function stopMainTick(): void {
  stopRecoilTick();
  clearTick(mainTick);
  mainTick = 0;
}

function startRecoilTick(): void {
  recoilTick = setTick(() => {
    if (currentWeapon !== 0 && IsPedShooting(PlayerPedId())) {
      const profile = RecoilProfiles[currentWeapon];
      if (profile !== undefined) {
        if (VerticalRecoilEnabled) {
          const camPitch = GetGameplayCamRelativePitch();
          SetGameplayCamRelativePitch(camPitch + profile.vertical, 1);
        }
        if (HorizontalRecoilEnabled) {
          const camHeading = GetGameplayCamRelativeHeading();
          SetGameplayCamRelativeHeading(camHeading + profile.horizontal);
        }
      }
    }
  });
}

function stopRecoilTick(): void {
  clearTick(recoilTick);
  recoilTick = 0;
}
