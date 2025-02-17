class Grafo {
    constructor(vertices) {
      this.vertices = vertices;
      this.adcList = new Map();
    
    for (let i = 0; i < vertices.length; i++){
        this.adcList.set(vertices[i], []);
    } 
  }

 
    addValues(origin, end) {
        this.adcList.get(origin).push(end);
        this.adcList.get(end).push(origin); 
    }

    verifyPar() {
      for(let i = 0; i < this.vertices.length; i++){
        const vertice = this.vertice[i];
            if (this.adcList.get(vertice).length % 2 !== 0){
                return false;
            }
        }
        return true
    }

    grau(vertice) {
            return this.adcList.get(vertice).length;    
        }

    verifyEuleriano(){
        if(!this.verifyPar()){
            return false;
        }
        for (let i = 0; i < this.vertices.length; i++){
            if (this.grau(this.vertices[i]) === 0){
                return false;
            } 
        }
        return true
    }
 
}

const input = ['1', '2', '3', '4', '5'];
const grafo = new Grafo(input)

grafo.addValues('1','2');
grafo.addValues('1','3');
grafo.addValues('2','3');
grafo.addValues('3','4');
grafo.addValues('4','5');
grafo.addValues('5','6'); 

  
if (grafo.verifyEuleriano()) {
    console.log('O grafo é euleriano.');
  } else {
    console.log('O grafo não é euleriano.');
  } 
  


