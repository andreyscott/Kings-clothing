const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          LinkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://images.unsplash.com/photo-1605022600390-071c6f969b32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGphY2tldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 2,
          LinkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://images.unsplash.com/photo-1612202686023-7fa91082956c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 3,
          LinkUrl: ''
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          LinkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          LinkUrl: ''
        }
      ]
}

const directoryReducer = ( state = INITIAL_STATE, action ) => {
           switch(action.type) { 
                            default: 
                        return state;
                   }
                              };

export default directoryReducer;