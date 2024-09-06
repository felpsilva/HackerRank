function saveThePrisoner(n, m, s) {
    let doces = m;
    let prisioneiro = 0;

    for(let i = s; i <= n; i++){
        doces--;
        prisioneiro = i;
        if(doces == 0){
            break;
        }
        if(i == n){
            i = 0;
        }
    }
    return prisioneiro
};

console.log(saveThePrisoner(7, 19, 2));
//5

