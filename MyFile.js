//HomeWork N1
var Tamagochi=
{
    name: "Tamagochi",
    health: 100,
    happiness: 100,
    hungry: 100,
    thisty: 100,
    son: 100,
    status : "",
    eat()
    {
        if(this.hungry>=100) 
        {
        this.hungry=this.hungry+0;
        this.health=this.health+3;
        }
        else if(this.hungry<100)
        {
        this.hungry=this.hungry+15;
        this.health=this.health+3;
        }
        else
        {
            this.hungry=this.hungry+0;
            this.health=this.health+0;
        }
    },
    drink()
    {
        if(this.thisty==100) 
        {
        this.thisty=this.thisty+0;
        this.health=this.health+3;
        }
        else if(this.thisty<100) 
        {
        this.thisty=this.thisty+15;
        this.health=this.health+3;
        }
        else
        {
            this.thisty=this.thisty+0;
            this.health=this.health+0;
        }
    },
    sleep()
    {
        if(this.son==100) 
        {
            this.son=this.son+0;
            this.hungry=this.hungry-15;
            this.thisty=this.thisty-15;
            this.health=this.health-5;
        }
        else if(this.son>=0 && this.son<100)
        {
            this.son=this.son+15;
            this.hungry=this.hungry-15;
            this.thisty=this.thisty-15;
            this.health=this.health-5;
        }
        else
        {
            this.son=this.son+0;
            this.hungry=this.hungry-0;
            this.thisty=this.thisty-0;
            this.health=this.health-0;
        }
    },
    play()
    {
        if(this.happiness==100) 
        {
        this.happiness=this.happiness+0;
        this.hungry=this.hungry-15;
        this.thisty=this.thisty-15;
        this.health=this.health-5;
        }
        else if(this.happiness >= 0 && this.happiness<100)
        {
        this.happiness=this.happiness+5;
        this.hungry=this.hungry-15;
        this.thisty=this.thisty-15;
        this.health=this.health-5;
        }
        else
        {
            this.happiness=this.happiness+0;
            this.hungry=this.hungry-0;
            this.thisty=this.thisty-0;
            this.health=this.health-0;
        }
    },
    dead()
    {
        if(this.health<=0)
        {
            console.log("Tamagochi is dead");
            this.status = "Tamagochi is dead";
        }
        else
        {
            console.log("Tamagochi is healthy");
            this.status = "Tamagochi is healthy";
        }
    },
    info()
    {
        this.dead();
        alert("Name:"+this.name+"\nStatus:\nHealth:"+this.health+"\nHappiness:"+this.happiness+"\nHungry:"+this.hungry+"\nThisty:"+this.thisty+"\nSon:"+this.son+"\n"+this.status);
        console.log(this.name);
        console.log("Status:");
        console.log(this.health);
        console.log(this.happiness);
        console.log(this.hungry);
        console.log(this.thisty);
        console.log(this.son);
        this.dead();
    }
    

}