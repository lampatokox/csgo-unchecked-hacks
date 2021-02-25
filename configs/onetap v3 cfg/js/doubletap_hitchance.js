var valid_dt_weapons = ["Pistol", "Desert Eagle", "Autosniper"]; //Will you DT with other weapons?
for(var i = 0; i < valid_dt_weapons.length; i++)
{
    UI.AddSliderInt(valid_dt_weapons[i] + " doubletap hitchance", 0, 100);
}



var should_override_hc = false;

var cached_weapon_classid = -1;
var cached_weapon_type = -1;

function get_current_weapon_doubletap_hitchance()
{
    var local = Entity.GetLocalPlayer();
    var local_player_weapon_classid = Entity.GetClassID(Entity.GetWeapon(local));
    if(local_player_weapon_classid == cached_weapon_classid && current_weapon_type != -1)
    {
        return UI.GetValue("Misc", "JAVASCRIPT", "Script items", (valid_dt_weapons[cached_weapon_type] + " doubletap hitchance"));
    } 
    var current_weapon_type = -1;
    switch(local_player_weapon_classid)
    {
        case 244: //glock
        case 245: //p2k
        case 271: //usp
        case 257: //p250
        case 238: //dualies
        case 240: //57
        case 268: //tec9
            current_weapon_type = 0;
            break;
        case 46: //deagle
            current_weapon_type = 1;
            break;
        case 241: //g3sg1
        case 260: //scar-20
            current_weapon_type = 2;
            break;
    }
    cached_weapon_classid = local_player_weapon_classid;
    cached_weapon_type = current_weapon_type;
    if(current_weapon_type == -1)
    {
        return -1;
    }
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valid_dt_weapons[current_weapon_type] + " doubletap hitchance");
}

function on_move()
{
    if(should_override_hc)
    {
        var proper_hitchance = get_current_weapon_doubletap_hitchance();
        if(proper_hitchance == -1)
        {
            return;
        }
        var enemies = Entity.GetEnemies();
        var enemy_arr_length = enemies.length;
        for(var i = 0; i < enemy_arr_length; i++)
        {
            if(Entity.IsValid(enemies[i]) && Entity.IsAlive(enemies[i]) && !Entity.IsDormant(enemies[i]))
            {
                Ragebot.ForceTargetHitchance(enemies[i], proper_hitchance);
            }
        }
    }
}

function on_ragebot_fire()
{
    var current_exploit = Event.GetInt("exploit");
    should_override_hc = current_exploit == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");
}

Cheat.RegisterCallback("CreateMove", "on_move");
Cheat.RegisterCallback("ragebot_fire", "on_ragebot_fire");
