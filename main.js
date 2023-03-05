function generate(){
    let  quotes = {
        "- ahmed" : '"My name is ahmed i have 16 years  old i love swiming my practical is programing full stack. "',
        "- ali" : '"My name is ali i have 14 years  old i love football my practical is designWebSite ."',
        "- mouad" : '"My name is louad i have 18 years  old i love football my practical is steetFood. "',
    }
    let authors = Object.keys(quotes) ;
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.querySelector('.quote').innerHTML = quote 
    document.querySelector('.author').innerHTML = author;
    
}