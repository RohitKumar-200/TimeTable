/* ------------ Date and time on header ----------*/
const day = (i)=> {
    switch(i) {
        case 1: return 'Mon';
        case 2: return 'Tue';
        case 3: return 'Wed';
        case 4: return 'Thu';
        case 5: return 'Fri';
        case 6: return 'Sat';
        case 7: return 'Sun';
    }
}
setInterval(()=>{
    const dt = new Date();
    document.getElementById("date-time").innerHTML = day(dt.getDay()) +" "+ (("0"+dt.getDate()).slice(-2)) +"/"+ (("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));
}, 1000);

/* --------- Faculty info -------*/
fetch('api/faculties.json').then(response => {
    if(response.ok){
        return response.json();
    }
    throw new Error('Request failed!');
    }, networkError => {console.log(networkError.message);}
    ).then(jsonResponse => {
        console.log(jsonResponse);
        const temp = document.getElementById('faculty-script').innerHTML;
        const tempFun = Handlebars.compile(temp)   //this returns a function that takes object as argument
        const html = tempFun({
            'faculty-array': jsonResponse
        });
        document.getElementById('faculty-info-container').innerHTML = html;
    });