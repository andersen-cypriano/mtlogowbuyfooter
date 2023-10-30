<script>
  function insertLogoMTWbuy () {
 // Infos
 const urlLogoMT = 'https://mtsolucoes.com.br/wp-content/uploads/2023/08/LOGOTIPO_MT_SOLUCOES.svg';
 const domainName = window.location.host.split('.')[1];
 const urlRedirectMT = `https://www.mtsolucoes.com.br/?utm_source=${domainName}&utm_medium=${domainName}`;
 
 // Dimensions em px
 const widthLogo = 150;
 const paddingLogo = 10;

 // Get logo wbuy and clone him to append after this element
 const logoWbuy = document.querySelector('footer + div a');
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

document.querySelector('footer + div a') ? insertLogoMTWbuy () : null;
</script>