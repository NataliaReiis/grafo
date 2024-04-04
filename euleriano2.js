class Grafo {
    constructor(vertices) {
      this.vertices = vertices;
      this.adjList = new Map();

      for (let i = 0; i < vertices.length; i++) {
        this.adjList.set(vertices[i], []);
      }
    }
  
    addEdge(origem, destino) {
      this.adjList.get(origem).push(destino);
      this.adjList.get(destino).push(origem); // Aresta não direcionada
    }
  
    verificaGrauPar() {
      for (let i = 0; i < this.vertices.length; i++) {
        const vertice = this.vertices[i];
        if (this.adjList.get(vertice).length % 2 !== 0) {
          return false;
        }
      }
      return true;
    }
  
    grauVertice(vertice) {
      return this.adjList.get(vertice).length;
    }
  
    grafoEuleriano() {
      if (!this.verificaGrauPar()) {
        return false;
      }
      for (let i = 0; i < this.vertices.length; i++) {
        if (this.grauVertice(this.vertices[i]) === 0) {
          return false;
        }
      }
      return true;
    }
  }
  
  // Exemplo de uso:
  const vertices = ['A', 'B', 'C', 'D', 'E'];
  const grafo = new Grafo(vertices);
  grafo.addEdge('A', 'B');
  grafo.addEdge('A', 'C');
  grafo.addEdge('B', 'C');
  grafo.addEdge('C', 'D');
  grafo.addEdge('D', 'E');
  grafo.addEdge('E', 'C');
  
  if (grafo.grafoEuleriano()) {
    console.log('O grafo é euleriano.');
    console.log(vertices)
  } else {
    console.log('O grafo não é euleriano.');
  } 
  