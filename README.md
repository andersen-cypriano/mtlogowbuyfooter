# MT logo - WBUY  :rocket:
## _Função para inserir o logo da MT Soluções no footer das lojas na plataforma wbuy._ :sparkles:

[![N|Solid](https://mtsolucoes.com.br/wp-content/uploads/2023/08/LOGOTIPO_MT_SOLUCOES.svg)](https://mtsolucoes.com.br/)

Edite as variáveis. :neckbeard:
| Variável | Valor |
| ------ | ------ |
| urlLogoMT | URL do logo |
| widthLogo | Tamanho do logo ( valor numérico em px, ex: 100 ) |
| paddingLogo | Espaçamento do logo ( valor numérico em px, ex: 10 ) |

:exclamation:**OBS:** 

 - A url de redirecionamento é gerada automaticamente baseado no url atual do projeto.
 - O script precisa estar dentro da tag de script ex:
 ```plaintext
<script>
function insertLogoMTWbuy () {
  // Infos
  const urlLogoMT = 'https://mtsolucoes.com.br/wp-content/uploads/2023/08/LOGOTIPO_MT_SOLUCOES.svg';
  const domainName = window.location.host.split('.')[0];
  const urlRedirectMT = `https://www.mtsolucoes.com.br/?utm_source=${domainName}&utm_medium=${domainName}`;
  
  // Dimensions em px
  const widthLogo = 150;
  const paddingLogo = 10;

  // Get logo wbuy and clone him to append after this element
  const logoWbuy = document.querySelector('footer + div a[href="https://www.wbuy.com.br/"]');
  const clone = logoWbuy .cloneNode(true);

  // Strings style to element cloned
  const styleLogoMT = `width: ${widthLogo}px`;
  const styleImgLogoMT = `width: 100%; height: auto; padding: 0 ${paddingLogo}px;`;

  // Set news attributes and values
  clone.setAttribute('href', urlRedirectMT);
  clone.style.cssText = styleLogoMT;
  clone.children[0].setAttribute('src', urlLogoMT)
  clone.children[0].setAttribute('alt', 'MT Soluções')
  clone.children[0].style.cssText = styleImgLogoMT;

  clone.children[0].removeAttribute('data-src');
  logoWbuy.after(clone)
}

document.querySelector('footer + div a[href="https://www.wbuy.com.br/"]') ? insertLogoMTWbuy () : null;
</script>
```
