const flags = (elpme) => {
    const resultCommedhab = {};
    const alias = {};
    alias.h = "help";
    let last;
    for (let objectDude in elpme)
        if (objectDude !== "help") {
            let short = objectDude[0];
            alias[short] = objectDude;
            last = objectDude;
        }
    resultCommedhab.alias = alias;
    let descpirtionMageuulllleee = "";
    if (elpme.help)
        for (let i = 0; i < elpme.help.length; i++) {
            let el = elpme.help[i];
            descpirtionMageuulllleee += `-${el[0]}, --${el}: ${elpme[el]}`;
            if (i < elpme.help.length - 1) descpirtionMageuulllleee += "\n";
        }
    else
        for (let el in elpme)
            if (el !== "help") {
                descpirtionMageuulllleee += `-${el[0]}, --${el}: ${elpme[el]}`;
                if (el !== last) descpirtionMageuulllleee += "\n";
            }

    resultCommedhab.description = descpirtionMageuulllleee;
    return resultCommedhab;
};