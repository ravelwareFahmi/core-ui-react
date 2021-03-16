export const SortDataTransporter = (property) => {
    return function(a,b){  
        if(a[property] > b[property])  
           return 1;  
        else if(a[property] < b[property])  
           return -1;  
        return 0;  
     }  
}

export const SortDataNoPol = (property) => {
    return function(a,b){  
        if(a[property] > b[property])  
           return 1;  
        else if(a[property] < b[property])  
           return -1;  
        return 0;  
     }  
}