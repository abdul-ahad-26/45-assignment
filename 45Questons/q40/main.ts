let make_album=(artist_name:string, album_title:string, number_of_tracks?:number)=>{
    return {
        "Artist name": artist_name,
        "Album title": album_title,
        "Number of tracks": number_of_tracks
    }
}
let dictionary1=make_album("Atif Aslam","Balag-al-ula");
let dictionary2=make_album("Atif Aslam","99 names of allah");
let dictionary3=make_album("Atif Aslam","Mustafa jaan e rehmat");
let dictionary4=make_album("Atif Aslam","Palestine song",4);


console.log(dictionary1["Artist name"], dictionary1["Album title"]);
console.log(dictionary2["Artist name"], dictionary2["Album title"]);
console.log(dictionary3["Artist name"], dictionary3["Album title"]);
console.log(dictionary4["Artist name"], dictionary4["Album title"], dictionary4["Number of tracks"]);



