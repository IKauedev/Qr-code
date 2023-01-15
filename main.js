const GerarQRcode = () =>{
    const textarea = document.querySelector('textarea').value;
    const GoogleChartAPI = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chld=H&chl=";
    const conteudoQrcode = GoogleChartAPI + encodeURIComponent(textarea);
    document.querySelector('#QRcodeimage').src = conteudoQrcode;
}

/* error_correction_level - os códigos QR suportam quatro níveis de correção de erros para permitir a recuperação de dados perdidos, mal lidos ou obscurecidos. Maior redundância é alcançada ao custo de ser capaz de armazenar menos dados. Veja o apêndice para detalhes. Aqui estão os valores suportados:
L - [Padrão] Permite a recuperação de até 7% de perda de dados
M - Permite a recuperação de até 15% de perda de dados
Q - Permite a recuperação de até 25% de perda de dados
H - Permite a recuperação de até 30% de perda de dados
margin - A largura da borda branca ao redor da porção de dados do código. Isso está em linhas, não em pixels. (Veja abaixo para saber quais linhas estão em um código QR.) O valor padrão é 4. */