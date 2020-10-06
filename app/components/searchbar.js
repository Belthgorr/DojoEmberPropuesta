import Component from '@glimmer/component';
import ENV from 'dojo-ember/config/environment';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class SearchbarComponent extends Component {
    @tracked title= "";
    @tracked img= "";
    @tracked name= "";
    @tracked director = "";
    @tracked genre = "";
    @tracked plot = "";
    @tracked runtime= "";
    @tracked year = "";
    @tracked ratings= [];
    @tracked item= false;


    get token() {
        return encodeURIComponent(ENV.OMDB_ACCESS_TOKEN);
      }
    get url(){
        return ENV.URL
    }
@action
 async model() {
    var finaltitle= encodeURI(this.title);
    let response = await fetch(`${this.url}?t=${finaltitle}&apikey=${this.token}`);
    let parsed = await response.json();
    this.img=parsed.Poster;
    this.name=parsed.Title;
    this.director = parsed.Director;
    this.genre = parsed.Genre;
    this.plot=parsed.Plot;
    this.ratings= parsed.Ratings;
    this.runtime= parsed.Runtime;
    this.year=parsed.Year
    this.item= true;
    console.log(this.ratings);


   // console.log(parsed);
    console.log(this.lista);
    
    }
    @action
    limpiar(){
        this.title="";
        this.name="";
        this.img="";
        this.item=false;


    }

} 

