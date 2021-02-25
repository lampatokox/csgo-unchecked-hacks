var oldHitChance = UI.GetValue("Rage", "SCOUT", "Accuracy", "Hitchance");
var oldAccBoost = UI.GetValue("Rage", "SCOUT", "Accuracy", "Accuracy boost");

UI.AddCheckbox("Jumpscout Hitchance");
UI.AddSliderInt("Hitchance", 1, 100);
UI.AddSliderInt("Accuracy Boost", 1, 100);

var isInAir = function(){
if(Global.IsKeyPressed((0x20))){
return true;
}else{
return false;
}
}

function updateValues(){
if(isInAir()){
var Hitchance = UI.GetValue("Script Items","Hitchance");
var AccuracyBoost = UI.GetValue("Script Items", "Accuracy Boost");
UI.SetValue("Rage", "SCOUT", "Accuracy", "Hitchance", Hitchance);
UI.SetValue("Rage", "SCOUT", "Accuracy", "Accuracy boost", AccuracyBoost);
}else{
UI.SetValue("Rage", "SCOUT", "Accuracy", "Hitchance", oldHitChance);
UI.SetValue("Rage", "SCOUT", "Accuracy", "Accuracy boost", oldAccBoost);
}
}

Global.RegisterCallback("CreateMove", "updateValues");