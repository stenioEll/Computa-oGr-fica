var meuArray = [22,8,21,98,11,9];
    console.log(meuArray);
    function swap(elementos, i_esquerda, i_direita){
        var aux = elementos[i_esquerda];
        elementos[i_esquerda] = elementos[i_direita];
        elementos[i_direita] = aux;
    }
    function partition(elemento, l, r) {
        var pivo   = elemento[Math.floor((r + l) / 2)],
            i = l,
            j = r;
        while (i <= j) {
            while (elemento[i] < pivo) {
                i++;
            }
            while (elemento[j] > pivo) {
                j--;
            }
            if (i <= j) {
                swap(elemento, i, j); 
                i++;
                j--;
            }
        }
        return i;
    }

    function quickSort(ar, l, r) {
        var indice;
        if (ar.length > 1) {
            indice = partition(ar, l, r); 
            if (l < indice - 1) { 
                quickSort(ar, l, indice - 1);
            }
            if (indice < r) { 
                quickSort(ar, indice, r);
            }
        }
        return ar;
    }
    var ordenado = quickSort(meuArray, 0, meuArray.length - 1);
    console.log(ordenado);