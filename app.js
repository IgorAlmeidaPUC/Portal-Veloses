const API_KEY = 'a8c0a11293d91653a37340a5c0e50187';
const TMDB_ENDPOINT_BASE= 'https://api.themoviedb.org/3/'


function PesquisaFilmes()
{
    $.ajax({
        url: TMDB_ENDPOINT_BASE+ '/search/movie',      
        data:{
            api_key:'a8c0a11293d91653a37340a5c0e50187',
            query:'star wars'
        }
    }).done(function(data){
        let codigo_html='';
        
        for(i=0;i<data.results.length;i++){
            titulo=data.results[i].title;
            Imagem= 'https://image.tmbd.org/t/p/w500'+data.results[i].poster_path
            descricao=data.results[i].overview;

            codigo_html+=` <div class= "col-2"><div class="card" style= "widh: 18 rem;">
            <img src="${imagem}" class="card-img-top"
            alt="${titulo}">
            <div class ="card-body">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-text">${descricao}</p>
            <a href="#" class="btn bttn-primary">Abrir filme</a>
            </div>
            </div<>/div>`;
        }
     
        
        $('#Lista_Pesquisa').html(codigo_html){

}




$(document).ready(function()
{
$('btnPesquisa').click(PesquisaFilmes)
});






