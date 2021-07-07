function superbowlWin(record){

    const win = record.find(response => response.result === "W");
    if (win){
    return win.year
    }
}

