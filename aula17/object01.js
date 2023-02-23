let amigo = { 
    nome: `João`,
    peso: 85.4,
    sexo: `M`,
    engordar( p = 0 ) {
        console.log(`Engordou`);
        this.peso += p;
    }}; // TODO O CÓDIGO ACIMA É UM OBJETO.
    
    amigo.engordar(2);
    console.log(`${amigo.nome} pesa ${amigo.peso}`);