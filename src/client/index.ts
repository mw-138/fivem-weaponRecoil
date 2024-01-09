import { delay } from "@common/index";
import { RecoilProfiles } from "./recoilProfiles";

let currentWeapon: number = 0;
let recoilTick: number = 0;

const VerticalRecoilEnabled: boolean = true;
const HorizontalRecoilEnabled: boolean = false;

setTick(async () => {
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
