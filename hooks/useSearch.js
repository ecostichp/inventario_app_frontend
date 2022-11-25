export default function useSearch (listaProductos, querySearch) {

  console.log ('useSearch funciona')
  console.log ('useSearch1', listaProductos[14149].id === 14150)
  console.log ('useSearch2', querySearch)
  
  const listaFiltradaProductos = listaProductos.filter(
    (el) => {
      return(
        el.descripcion.toLowerCase().indexOf(querySearch.toLowerCase()) > -1
      )
    })
    
    
    console.log ('useSearch3', listaFiltradaProductos)
    return listaFiltradaProductos
    
  }
  