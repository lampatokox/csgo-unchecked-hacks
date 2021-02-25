Cheat.RegisterCallback("CreateMove", "cMove");
UI.AddHotkey("Slow-walk:");

UI.AddSliderInt("Speed:", 0, 135);

UI.AddCheckbox("Individual speeds:", 0, 135);

UI.AddSliderInt("Forward Speed:", 0, 135);
UI.AddSliderInt("Side Speed:", 0, 135);
UI.AddSliderInt("Back Speed:", 0, 135);


function getVal(valName) {return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valName);}

function cMove() {
    //forward, side, up.
    if (!UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Slow-walk:")) return;

    speed = getVal("Speed:");

    fSpeed = speed;
    bSpeed = speed;
    sSpeed = speed;

    if (getVal("Individual speeds:")) {
        fSpeed = getVal("Forward Speed:");
        bSpeed = getVal("Back Speed:");
        sSpeed = getVal("Side Speed:");
    }

    dir = [0, 0, 0];

    if (Input.IsKeyPressed(0x57)) {
        //'W' AKA Forward
        dir[0] += fSpeed;
    }
    if (Input.IsKeyPressed(0x44)) {
        //'D' AKA Right
        dir[1] += sSpeed;
    }
    if (Input.IsKeyPressed(0x41)) {
        //'A' AKA Left
        dir[1] -= sSpeed;
    }
    if (Input.IsKeyPressed(0x53)) {
        //'S' AKA Back
        dir[0] -= bSpeed;
    }

    UserCMD.SetMovement(dir);
}