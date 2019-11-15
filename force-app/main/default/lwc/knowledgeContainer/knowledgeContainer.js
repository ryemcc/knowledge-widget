import { LightningElement, track } from 'lwc';
import searchKnowledge from "@salesforce/apex/KnowledgeController.searchKnowledge";
export default class KnowledgeContainer extends LightningElement {

  timeoutId

  @track
  searchInFlight = false

  @track
  articles = []

  async handleKeyUp(e){
    const query = e.target.value
    if(this.timeoutId){
      clearTimeout(this.timeoutId)
      this.timeoutId = null
    }

    if(query.length < 3) return
    this.timeoutId = setTimeout(async ()=>{
      this.searchInFlight = true
      const response = await searchKnowledge({query});
      this.articles = response[0]
      this.searchInFlight = false
    }, 300)
  }

  handleArticleClick(e){
    console.log(e.currentTarget.dataset.id)
  }

}