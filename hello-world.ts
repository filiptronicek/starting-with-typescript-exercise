function doIt(msg: string): void {
    const theText = msg;
    alert(theText);

    const datenow = new Date();
    const hour:number = datenow.getHours();

    console.log(hour);
}