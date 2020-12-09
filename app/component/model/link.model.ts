export class Link { 
    title: string;
    link: string;
    votes: number;

    constructor(title:string,link:string,votes?:number) { 
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    // Incrementar VOTOS
    voteUp() { 
        this.votes++;
    }
    // Restamos el Voto
    voteDown() { 
        this.votes--;
    }
}