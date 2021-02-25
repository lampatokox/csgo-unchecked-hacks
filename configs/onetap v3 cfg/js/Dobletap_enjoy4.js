function DisableExploits()
{
    localplayer_index = Entity.GetLocalPlayer( );
    localplayer_weapon = Entity.GetWeapon(localplayer_index);
    weapon_name = Entity.GetName(localplayer_weapon);
}

function Exploits()
{

    var scriptitems = ["Misc", "JAVASCRIPT", "Script Items"];
    var enableddt = UI.GetValue(scriptitems, "Dobletap (only)");
    var enabledhs = UI.GetValue(scriptitems, "Hide shots (only)");

if(enableddt){

if(weapon_name == "g3sg1") {
    UI.SetValue("Rage", "Exploits", "Doubletap", true);
}

if(weapon_name == "scar") {
    UI.SetValue("Rage", "Exploits", "Doubletap", true);
}

if(weapon_name == "deagle") {
    UI.SetValue("Rage", "Exploits", "Doubletap", true);
}

if(weapon_name == "ssg 08") {
    UI.SetValue("Rage", "Exploits", "Doubletap", false);
}

if(weapon_name == "m4a4") {
    UI.SetValue("Rage", "Exploits", "Doubletap", true);
}

if(weapon_name == "elite") {
    UI.SetValue("Rage", "Exploits", "Doubletap", true);
}

if(weapon_name == "awp") {
    UI.SetValue("Rage", "Exploits", "Doubletap", false);
}
}

if(enabledhs){

if(weapon_name == "g3sg1") {
    UI.SetValue("Rage", "Exploits", "Hide shots", true);
}

if(weapon_name == "deagle") {
    UI.SetValue("Rage", "Exploits", "Hide shots", true);
}

if(weapon_name == "scar") {
    UI.SetValue("Rage", "Exploits", "Hide shots", true);
}

if(weapon_name == "ssg 08") {
    UI.SetValue("Rage", "Exploits", "Hide shots", false);
}

if(weapon_name == "m4a4") {
    UI.SetValue("Rage", "Exploits", "Hide shots", true);
}

if(weapon_name == "elite") {
    UI.SetValue("Rage", "Exploits", "Hide shots", true);
}

if(weapon_name == "awp") {
    UI.SetValue("Rage", "Exploits", "Hide shots", false);
}
}


}

function main()
{

UI.AddLabel("/--------------------/");
UI.AddCheckbox("dobletap (only)");
UI.AddCheckbox("hide shots (only)");
UI.AddLabel("Dobletap v.1")
UI.AddLabel("/--------------------/");

Cheat.RegisterCallback("Draw", "Exploits");
Cheat.RegisterCallback("Draw", "DisableExploits");
}
main()
