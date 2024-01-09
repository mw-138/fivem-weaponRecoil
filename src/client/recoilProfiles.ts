import RecoilProfile from "./classes/recoilProfile";
import WeaponRecoilDictionary from "./interfaces/weaponRecoilDictionary";

export const RecoilProfiles: WeaponRecoilDictionary = {
  // HANDGUNS
  [453432689]: new RecoilProfile(1.0, 0), // PISTOL
  [-1075685676]: new RecoilProfile(0.5, 0), // PISTOL MK2
  [1593441988]: new RecoilProfile(1.0, 0), // COMBAT PISTOL
  [-1716589765]: new RecoilProfile(1.5, 0), // PISTOL .50
  [-1076751822]: new RecoilProfile(1.0, 0), // SNS PISTOL
  [-2009644972]: new RecoilProfile(1.0, 0), // SNS PISTOL MK2
  [-771403250]: new RecoilProfile(0.4, 0), // HEAVY PISTOL
  [137902532]: new RecoilProfile(1.0, 0), // VINTAGE PISTOL
  [-598887786]: new RecoilProfile(1.75, 0), // MARKSMAN PISTOL
  [-1045183535]: new RecoilProfile(1.75, 0), // HEAVY REVOLVER
  [-879347409]: new RecoilProfile(1.35, 0), // HEAVY REVOLVER MK2
  [-1746263880]: new RecoilProfile(1.0, 0), // DOUBLE-ACTION REVOLVER
  [584646201]: new RecoilProfile(1.35, 0), // AP PISTOL
  [-619010992]: new RecoilProfile(1.35, 0), // MACHINE PISTOL
  [911657153]: new RecoilProfile(0.1, 0), // STUN GUN
  [1198879012]: new RecoilProfile(0.1, 0), // FLARE GUN
  [-1355376991]: new RecoilProfile(0.1, 0), // UP-N-ATOMIZER

  // SUBMACHINE GUNS
  [324215364]: new RecoilProfile(0.75, 0), // MICRO SMG
  [-1121678507]: new RecoilProfile(0.75, 0), // MINI SMG
  [736523883]: new RecoilProfile(0.75, 0), // SMG
  [2024373456]: new RecoilProfile(0.4, 0), // SMG MK2
  [-270015777]: new RecoilProfile(0.5, 0), // ASSAULT SMG
  [171789620]: new RecoilProfile(0.75, 0), // COMBAT PDW

  // SHOTGUNS
  [487013001]: new RecoilProfile(3.0, 0), // PUMP SHOTGUN
  [1432025498]: new RecoilProfile(3.0, 0), // PUMP SHOTGUN MK2
  [2017895192]: new RecoilProfile(3.0, 0), // SAWED-OFF SHOTGUN
  [-1654528753]: new RecoilProfile(3.0, 0), // BULLPUP SHOTGUN
  [-494615257]: new RecoilProfile(3.0, 0), // ASSAULT SHOTGUN
  [984333226]: new RecoilProfile(3.0, 0), // HEAVY SHOTGUN
  [-275439685]: new RecoilProfile(3.0, 0), // DOUBLE BARREL SHOTGUN
  [317205821]: new RecoilProfile(5.0, 0), // SWEEPER SHOTGUN
  [-1466123874]: new RecoilProfile(3.0, 0), // MUSKET

  // ASSAULT RIFLES
  [-1074790547]: new RecoilProfile(0.3, 0), // ASSAULT RIFLE
  [961495388]: new RecoilProfile(0.15, 0), // ASSAULT RIFLE MK2
  [-2084633992]: new RecoilProfile(0.15, 0), // CARBINE RIFLE
  [-86904375]: new RecoilProfile(0.15, 0), // CARBINE RIFLE MK2
  [-1357824103]: new RecoilProfile(0.35, 0), // ADVANCED RIFLE
  [-1063057011]: new RecoilProfile(0.4, 0), // SPECIAL CARBINE
  [-1768145561]: new RecoilProfile(0.3, 0), // SPECIAL CARBINE MK2
  [2132975508]: new RecoilProfile(0.3, 0), // BULLPUP RIFLE
  [-2066285827]: new RecoilProfile(0.2, 0), // BULLPUP RIFLE MK2
  [1649403952]: new RecoilProfile(0.45, 0), // COMPACT RIFLE
  [1198256469]: new RecoilProfile(0.25, 0), // UNHOLY HELLBRINGER

  // LIGHT MACHINE GUNS
  [-1660422300]: new RecoilProfile(1.5, 0), // MG
  [2144741730]: new RecoilProfile(1.25, 0), // COMBAT MG
  [-608341376]: new RecoilProfile(1.0, 0), // COMBAT MG MK2
  [1627465347]: new RecoilProfile(0.75, 0), // GUSENBERG SWEEPER

  // SNIPER RIFLES
  [100416529]: new RecoilProfile(2.0, 0), // SNIPER RIFLE
  [205991906]: new RecoilProfile(3.0, 0), // HEAVY SNIPER
  [177293209]: new RecoilProfile(2.5, 0), // HEAVY SNIPER MK2
  [-952879014]: new RecoilProfile(2.5, 0), // MARKSMAN RIFLE
  [1785463520]: new RecoilProfile(2.0, 0), // MARKSMAN RIFLE MK2

  // HEAVY
  [1119849093]: new RecoilProfile(0.01, 0), // MINIGUN
  [-1238556825]: new RecoilProfile(0.01, 0), // WIDOWMAKER
  [1834241177]: new RecoilProfile(5.0, 0), // RAILGUN

  // EXPLOSIVES
  [-1568386805]: new RecoilProfile(1.2, 0), // GRENADE LAUNCHER
  [-1312131151]: new RecoilProfile(10.0, 0), // RPG
  [2138347493]: new RecoilProfile(0.75, 0), // FIREWORK LAUNCHER
  [1672152130]: new RecoilProfile(10.0, 0), // HOMING LAUNCHER
  [125959754]: new RecoilProfile(1.2, 0), // COMPACT GRENADE LAUNCHER
};
