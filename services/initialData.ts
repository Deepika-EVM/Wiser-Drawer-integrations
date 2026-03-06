import { Snippet } from '../types';

export const INITIAL_DATA: Snippet[] = [
  {
    id: '1',
    storeName: 'jerseys-megastore.myshopify.com',
    themeName: 'Local',
    date: '25-12-09',
    author: 'Deepika',
    code: `function wiseraddedtocart() {\n    window.refreshCart()\n}`
  },
  {
    id: '2',
    storeName: 'wooden-ships.myshopify.com',
    themeName: 'Symmetry',
    date: '25-11-27',
    author: 'Deepika',
    code: `function wiseraddedtocart() {\n  document.dispatchEvent(\n    new CustomEvent('dispatch:cart-drawer:refresh', {\n      bubbles: true,\n    })\n  );\n  document.dispatchEvent(new CustomEvent('dispatch:cart-drawer:open'));\n}\nwiseraddedtocart();`
  },
  {
    id: '3',
    storeName: 'shopnalli.myshopify.com',
    themeName: 'Horizon',
    date: '25-11-11',
    author: 'Deepika',
    code: `function wiseraddtocart() {\n  document.dispatchEvent(\n    new CustomEvent('cart:update', {\n      detail: {\n        data: {\n          source: 'manual-console',\n          sections: {},\n        },\n      },\n      bubbles: true,\n      composed: true,\n    })\n  );\n  const wscart = document.querySelector('.cart-drawer__dialog');\n  wscart.show();\n}\nwiseraddtocart();`
  },
  {
    id: '4',
    storeName: 'prostandard.myshopify.com',
    themeName: 'Craft',
    date: '25-10-30',
    author: 'Deepika',
    code: `async function wiseraddtocart() {\n    const wsres = await fetch('/?section_id=cart-icon-bubble');\n    const wsText = await wsres.text();\n    const wshtml = document.createElement('div');\n    wshtml.innerHTML = wsText;\n    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;\n    const cartIconElement = document.querySelector('#cart-icon-bubble.header__icon--cart');\n    cartIconElement.innerHTML = wsnewBox;\n}\nwiseraddtocart()`
  },
  {
    id: '5',
    storeName: 'prostandard.myshopify.com',
    themeName: 'Symmetry',
    date: '25-10-26',
    author: 'Deepika',
    code: `<script>\nfunction wiseraddedtocart(){\n  document.documentElement.dispatchEvent(new CustomEvent('theme:cartchanged', { bubbles: true, cancelable: false, detail: { openDrawer: true } }));\n  document.querySelector('.cart-link').click();\n}\n</script>`
  },
  {
    id: '6',
    storeName: 'flexx-memory.myshopify.com',
    themeName: 'Electro Theme',
    date: '25-10-07',
    author: 'Evm',
    code: `async function wiseraddedtocart() {\n  if (window.innerWidth < 992) {\n    document.querySelector('#cart-message').addClass('is-open');\n  } else {\n    document.querySelector('.js-header-cart-icon--desktop').click();\n\n    try {\n      const res = await fetch('/?section_id=ajax-cart');\n      const html = await res.text();\n      const tempDiv = document.createElement('div');\n      tempDiv.innerHTML = html;\n      const ajaxCartSection = tempDiv.querySelector(\n        '#shopify-section-ajax-cart'\n      );\n      if (!ajaxCartSection) {\n        return;\n      }\n      const cartJSON = JSON.parse(\n        ajaxCartSection.querySelector('[data-cart-json]')?.innerHTML\n      );\n      const dropdownCartBody = document.querySelector(\n        'body .dropdown-cart .dropdown-cart_body'\n      );\n      if (dropdownCartBody) {\n        dropdownCartBody.innerHTML = ajaxCartSection.innerHTML;\n      }\n      const cartTotal = document.querySelector('.cart-total_price');\n      if (cartTotal && cartJSON.total_price != null) {\n        cartTotal.innerHTML = cartJSON.total_price.toCurrency();\n        window.Shopify?.theme?.sections?.instances?.[0]?.dropdownCart?.setItemCount(\n          cartJSON.item_count\n        );\n        const cartElement = document.querySelector('.js-header-dropdown-cart');\n        cartElement.setAttribute('data-cart-item-count', cartJSON.item_count);\n      }\n      window.Shopify?.theme?.sections?.instances?.[0].dropdownCart.container\n        .querySelectorAll('.js-cart-line-item')\n        .forEach(\n          window.Shopify?.theme?.sections?.instances?.[0].initDropdownCartLineItem.bind(\n            window.Shopify?.theme?.sections?.instances?.[0]\n          )\n        );\n    } catch (error) {\n      console.error('Error fetching cart data:', error);\n    }\n  }\n}\nwiseraddedtocart();`
  },
  {
    id: '7',
    storeName: 'cad71e-74.myshopify.com',
    themeName: 'PoseTheme',
    date: '25-10-07',
    author: 'Jaya',
    code: `function wiseraddedtocart() {\n  theme.miniCart.updateElements();\n  theme.miniCart.generateCart();\n}\nwiseraddedtocart()`
  },
  {
    id: '8',
    storeName: 'indiangoodsgenie.myshopify.com',
    themeName: 'Booster-7.1.4',
    date: '25-10-07',
    author: 'Deepika',
    code: `function wiseraddedtocart() {\n  $('.minicart__button--shopping-cart .minicart__label').trigger('click');\n}`
  },
  {
    id: '9',
    storeName: 'andy-evan.myshopify.com',
    themeName: 'Boost',
    date: '25-10-07',
    author: 'Deepika',
    code: `function wiseraddedtocart(){\n  window.SLIDECART_UPDATE()\n  window.SLIDECART_OPEN()\n}`
  },
  {
    id: '10',
    storeName: 'livingfitstore123.myshopify.com',
    themeName: 'Pursuit',
    date: '25-10-06',
    author: 'Deepika',
    code: `function wiserAddedToCart() {\n  theme.Cart.prototype._sidebarDrawerOpen();\n  theme.Cart.prototype._onProductAdded();\n}`
  },
  {
    id: '11',
    storeName: 'fb235c-92.myshopify.com',
    themeName: 'Divine',
    date: '25-09-25',
    author: 'Deepika',
    code: `<script>\nasync function wiseraddedtocart(){\n    const wsres = await fetch('/?section_id=cart-icon-bubble');\n    const wsText = await wsres.text();\n    const wshtml = document.createElement('div');\n    wshtml.innerHTML = wsText;\n    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;\n    const cartIconElement = document.querySelector('#cart-icon-bubble'); // Fixed selector\n    if (cartIconElement) cartIconElement.innerHTML = wsnewBox;\n    document.querySelector('body .header__icon .cart-count-bubble').click();\n}\n</script>`
  },
  {
    id: '12',
    storeName: 'ozlifestyle-2.myshopify.com',
    themeName: 'Empire',
    date: '25-09-23',
    author: 'Deepika',
    code: `<script>\nfunction wiserAddedToCart(){\nfetch(\`\${window.Theme.routes.cart_url}.js\`)\n  .then(response => response.json())\n  .then(data => {\n    console.log('Cart data:', data);\n    const countEvent = new CustomEvent('cartcount:update', {\n      detail: data\n    });\n    window.dispatchEvent(countEvent);\n  })\n  .catch(error => console.error('Error updating cart:', error));\n}\n</script>`
  },
  {
    id: '13',
    storeName: 'pmc-jewellery.myshopify.com',
    themeName: 'Dawn',
    date: '25-09-21',
    author: 'Deepika',
    code: `<script>\nasync function wiserAddedToCart() {\n  try {\n    const wsres = await fetch('/?section_id=cart-icon-bubble');\n    const wsText = await wsres.text();\n    const wshtml = document.createElement('div');\n    wshtml.innerHTML = wsText;\n    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;\n    const cartIconElement = document.querySelector('#cart-icon-bubble.header__icon--cart');\n    if (cartIconElement && wsnewBox) {\n      cartIconElement.innerHTML = wsnewBox;\n    }\n  } catch (error) {\n    console.error('Error in wiserAddedToCart:', error);\n  }\n}\n</script>`
  },
  {
    id: '14',
    storeName: '9bd82c-2.myshopify.com',
    themeName: 'Stiletto',
    date: '25-09-16',
    author: 'Deepika',
    code: `function wiseraddedtocart() {\n  $('.quick-cart__container').load(location.href + ' .quick-cart__container>*', '');\n  setTimeout(function() {\n    $('body header a .icon-button.icon-button-header-shopping-cart').trigger('click');\n  }, 1500);\n}`
  },
  {
    id: '15',
    storeName: 'wojciechowskacosmetics.myshopify.com',
    themeName: 'Prestige',
    date: '25-09-12',
    author: 'Jaya',
    code: `async function wiseraddtocart() {                                \n  document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {\n  bubbles: true\n}));\n const cartDrawer = document.querySelector('cart-drawer');\n cartDrawer.show()\n }\nwiseraddtocart()`
  },
  {
    id: '16',
    storeName: 'mega-vitamins.myshopify.com',
    themeName: 'Ecomus',
    date: '25-09-11',
    author: 'Deepika',
    code: `<script>\n   function wiseraddedtocart() {\n      document.dispatchEvent(new CustomEvent('cart:refresh'));\n      document.querySelector('.hdt-site-nav_cart a').click();\n   }\n</script>`
  },
  {
    id: '17',
    storeName: 'wb-hbo.myshopify.com',
    themeName: 'Snow Blizzard',
    date: '25-09-01',
    author: 'Deepika',
    code: `<script>\n function wiseraddedtocart(){\n     new theme.CartDrawer();\n     $('.js-drawer-open-cart span').trigger('click');\n   }\n</script>`
  },
  {
    id: '18',
    storeName: 'universal-parks.myshopify.com',
    themeName: 'Dawn',
    date: '25-09-01',
    author: 'Deepika',
    code: `<script>\n async function wiseraddedtocart() {\n    const wsres = await fetch('/?section_id=cart-icon-bubble');\n    const wsText = await wsres.text();\n    const wshtml = document.createElement('div');\n    wshtml.innerHTML = wsText;\n    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;\n    const cartIconElement = document.querySelector('#cart-icon-bubble.header__icon--cart');\n    cartIconElement.innerHTML = wsnewBox;\n    const wsrescart = await fetch('/?section_id=cart-drawer');\n    const wstextcart = await wsrescart.text();\n    const wshtmlcart = document.createElement('div');\n    wshtmlcart.innerHTML = wstextcart;\n    const wsnewBoxCart = wshtmlcart.querySelector('.drawer__inner').innerHTML;\n    document.querySelector('.drawer__inner').innerHTML = wsnewBoxCart;\n    const wsopener = document.querySelector('cart-drawer');\n    wsopener.open();\n    document.querySelector('cart-drawer').classList.remove('is-empty');\n  }\n</script>`
  },
  {
    id: '19',
    storeName: 'disney-hulu.myshopify.com',
    themeName: 'Snow Blizzard',
    date: '25-08-20',
    author: 'Deepika',
    code: `function wiserAddedToCart() {\n  if (!theme.cartDrawer && typeof theme.CartDrawer === 'function') {\n    theme.cartDrawer = new theme.CartDrawer();\n  }\n  // cartDrawer logic\n  fetch('/cart.js')\n    .then(response => response.json())\n    .then(cart => {\n      if (theme.cartDrawer && theme.cartDrawer.updateSuccess) {\n        theme.cartDrawer.updateSuccess(cart);\n        theme.cartDrawer.drawer.open();\n      }\n    });\n}`
  },
  {
    id: '20',
    storeName: '38dd0b-3.myshopify.com',
    themeName: 'Dawn',
    date: '25-08-20',
    author: 'Deepika',
    code: `function wiseraddedtocart(){\nconst cartIcon = $('#cart-icon-bubble')[0];\nif (cartIcon) cartIcon.click();\n  monster_refresh();\n}`
  },
  {
    id: '21',
    storeName: 'turner-engineering.myshopify.com',
    themeName: 'Athens',
    date: '25-08-20',
    author: 'Deepika',
    code: `function wiseraddedtocart(){\n  const wscart = document.querySelector('mini-cart');\n  wscart.updateQuantity();\n  wscart.open();\n}`
  },
  {
    id: '22',
    storeName: 'chefs-mandala-gourmet-store.myshopify.com',
    themeName: 'Dawn',
    date: '25-07-03',
    author: 'Neeraj',
    code: `async function wiseraddedtocart() {\n    const wsres = await fetch('/?section_id=cart-icon-bubble');\n    const wsText = await wsres.text();\n    const wshtml = document.createElement('div');\n    wshtml.innerHTML = wsText;\n    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;\n    const cartIconElement = document.querySelector('#cart-icon-bubble.header__icon--cart');\n    cartIconElement.innerHTML = wsnewBox;\n    const wsrescart = await fetch('/?section_id=cart-drawer');\n    const wstextcart = await wsrescart.text();\n    const wshtmlcart = document.createElement('div');\n    wshtmlcart.innerHTML = wstextcart;\n    const wsnewBoxCart = wshtmlcart.querySelector('.drawer__inner').innerHTML;\n    document.querySelector('.drawer__inner').innerHTML = wsnewBoxCart;\n    const wsopener = document.querySelector('cart-drawer');\n    wsopener.open();\n    document.querySelector('cart-drawer').classList.remove('is-empty');\n  }\n  wiseraddedtocart()`
  },
  {
    id: '23',
    storeName: 'haveda-uk.myshopify.com',
    themeName: 'Dawn',
    date: '25-07-03',
    author: 'Yash',
    code: `async function wiserAddedToCart() {\nconst wsres = await fetch('/?section_id=cart-icon-bubble');\n    const wsText = await wsres.text();\n   const wshtml = document.createElement('div');\n      wshtml.innerHTML = wsText;\n    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;\nconst cartIconElement = document.querySelector('#cart-icon-bubble.header__icon--cart');\ncartIconElement.innerHTML = wsnewBox;\n}`
  },
  {
    id: '24',
    storeName: 'flexpawz-2.myshopify.com',
    themeName: 'Dawn',
    date: '25-07-03',
    author: 'Deepika',
    code: `function wiseraddedtocart(){\nconst cartIcon = $('#cart-icon-bubble')[0];\nif (cartIcon) cartIcon.click();\n  monster_refresh();\n}`
  },
  {
    id: '25',
    storeName: 'cad71e-74.myshopify.com',
    themeName: 'PoseTheme',
    date: '25-07-03',
    author: 'Yash',
    code: `function wiseraddedtocart() {\n  theme.miniCart.updateElements();\n  theme.miniCart.generateCart();\n}\n\nsetTimeout(function () {\n  var $wsInit = 0;\n  var oldcount = 0;\n  var $wsInterval = setInterval(function () {\n    var $wsDrawerDivCnt = document.querySelectorAll('body div.evm-drawer-main div').length;\n    var newCount = document.querySelector('.mini-cart-header .js-cart-count').textContent;\n    if ($wsDrawerDivCnt == 16 && $wsInit == 0 && oldcount != newCount) {\n      $wsInit = 1;\n      window.WISER_INIT('cart', 1);\n      oldcount = newCount;\n      setTimeout(function () {\n        $wsInit = 0;\n      }, 3000);\n    }\n  }, 100);\n}, 3000);`
  },
  {
    id: '26',
    storeName: 'eyb5bj-dr.myshopify.com',
    themeName: 'Blockshop',
    date: '25-06-27',
    author: 'Yash',
    code: `<script>\nasync function wiseraddedtocart() {\n  const wsres = await fetch('/?section_id=cart-drawer');\n  const wstext = await wsres.text();\n  const wshtml = document.createElement('div');\n  wshtml.innerHTML = wstext;\n  const wsnewBox = wshtml.querySelector('cart-element').innerHTML;\n  document.querySelector('cart-element').innerHTML = wsnewBox;\n  const viewport = document.querySelector('.layout--viewport');\n  if (viewport) {\n    viewport.setAttribute('data-cart-empty', 'false');\n  }\n  window.trigger('theme:drawer:open', {\n    side: 'right',\n    view: 'cart-drawer',\n    trigger: '',\n  });\n  window.trigger('theme:transition:reload:cart-drawer');\n  window.Cart.updateTotals('updateTotals');\n} </script>`
  },
  {
    id: '27',
    storeName: 'hi8ahp-jn.myshopify.com',
    themeName: 'Impulse',
    date: '25-06-25',
    author: 'Deepika',
    code: `<script>\nfunction wiseraddedtocart() {\n  new theme.CartDrawer();\n  $('.js-drawer-open-cart span').trigger('click');\n}\n </script>`
  },
  {
    id: '28',
    storeName: 'signify-india.myshopify.com',
    themeName: 'Lampi',
    date: '25-06-25',
    author: 'Deepika',
    code: `<script>\nfunction wiseraddedtocart() {\n  let wsFlag = 0;\n  if (!document.querySelector('.mini-cart-bottom.enj-minicart-ajax .prod ')) {\n    if (wsFlag == 0) {\n      wsFlag = 1;\n      window.REFRESH_CART(true);\n    }\n    window.refreshCart(true);\n    window.OPEN_CART();\n  } else {\n    window.refreshCart(true);\n    window.OPEN_CART();\n  }\n}\n </script>`
  },
  {
    id: '29',
    storeName: 'somethings-brewing-store.myshopify.com',
    themeName: 'Hyper',
    date: '25-06-25',
    author: 'Deepika',
    code: `<script>\nfunction wiseraddedtocart() {\n  const wscart11 = document.querySelector('cart-count');\n  if (wscart11 && wscart11.hasAttribute('hidden')) {\n    wscart11.removeAttribute('hidden');\n  }\n  const wscart = document.querySelector('cart-drawer');\n if (wscart && typeof wscart.onCartRefresh === 'function') {\n    wscart.onCartRefresh();\n  }\n  wscart.show();\n}\n </script>`
  },
  {
    id: '30',
    storeName: 'american-cornhole-association.myshopify.com',
    themeName: 'Focal',
    date: '25-06-12',
    author: 'Deepika',
    code: `<script>\nfunction wiseraddedtocart() {\n  document.documentElement.dispatchEvent(\n    new CustomEvent('cart:refresh', {\n      bubbles: true,\n      detail: {\n        openMiniCart: window.themeVariables.settings.cartType === 'drawer',\n      },}));\n  // Theme based code\n  $.getJSON('/cart.js', function (cart) {\n    var ws_item_count = cart.item_count;\n    $('.header__cart-count').text(ws_item_count);\n  });\n}\n\nvar $wsInit = 0;\nvar $wsInterval = setInterval(function () {\n  var $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n  var wsChkAttr = $('cart-drawer').attr('open');\n  if (\n    typeof wsChkAttr !== 'undefined' &&\n    wsChkAttr !== false &&\n    $wsDrawerDivCnt == 8 &&\n    $wsInit == 0\n  ) {\n    $wsInit = 1;\n    window.WISER_INIT('cart', 1);\n    setTimeout(function () {\n      $wsInit = 0;\n    }, 1000);}\n}, 100);\n </script>`
  },
  {
    id: '31',
    storeName: 'azariabrand.myshopify.com',
    themeName: 'Shella',
    date: '25-06-12',
    author: 'Deepika',
    code: `<script>\n  function wiseraddedtocart() {\n        $('body .header__counter')[0].click();\n  }\n </script>`
  },
  {
    id: '32',
    storeName: 'lashv-us.myshopify.com',
    themeName: 'Minimog - OS 2.0',
    date: '25-06-06',
    author: 'Deepika',
    code: `<script>\n  function wiseraddedtocart(){\n  const wscart = document.querySelector('m-cart-drawer');\n  wscart.onCartDrawerUpdate();\n  wscart.open();\n  }\nsetTimeout(function () {\n  var $wsInit = 0;\n  var oldcount = 0;\n  var $wsInterval = setInterval(function () {\n    var $wsDrawerDivCnt = document.querySelectorAll('body div.evm-drawer-main div').length;\n    var newCount = document.querySelector('.m-cart-count-bubble').textContent;\n    if ($wsDrawerDivCnt == 8 && $wsInit == 0 && oldcount != newCount) {\n      $wsInit = 1;\n      window.WISER_INIT('cart', 1);\n      oldcount = newCount;\n      setTimeout(function () {\n        $wsInit = 0;\n      }, 3000);\n    }\n  }, 100);\n }, 3000);\n</script>`
  },
  {
    id: '33',
    storeName: '2dffa4.myshopify.com',
    themeName: 'Testament',
    date: '25-05-29',
    author: 'Deepika',
    code: `<script>\n  function wiseraddedtocart(){\n     const cartDrawer11 = document.querySelector('.cart-drawer');\n    cartDrawer11?.openDialog?.();\n   const cartDrawer22 = document.querySelector('cart-items');\ncartDrawer22?.refreshCart();\n  }  \nsetTimeout(function () {\n  var $wsInit = 0\n  var oldcount = 0\n  var $wsInterval = setInterval(function () {\n    var $wsDrawerDivCnt = document.querySelectorAll('body div.evm-drawer-main div').length\n    var newCount = document.querySelector('.evm_wiser_count').textContent\n    if ($wsDrawerDivCnt == 8 && $wsInit == 0 && oldcount != newCount) {\n      $wsInit = 1\n      window.WISER_INIT('cart', 1)\n      oldcount = newCount\n      setTimeout(function () {\n        $wsInit = 0\n      }, 3000)\n    }\n  }, 00)\n}, 4000)\n</script>`
  },
  {
    id: '34',
    storeName: 'everything-crochet-shop.myshopify.com',
    themeName: 'Primavera',
    date: '25-05-30',
    author: 'Deepika',
    code: `<script>\n  function wiseraddedtocart(){\n     const cartDrawer11 = document.querySelector('.cart-drawer');\n    cartDrawer11?.openDialog?.();\n   const cartDrawer22 = document.querySelector('cart-items');\ncartDrawer22?.refreshCart();\n  }  \nsetTimeout(function () {\n  var $wsInit = 0\n  var oldcount = 0\n  var $wsInterval = setInterval(function () {\n    var $wsDrawerDivCnt = document.querySelectorAll('body div.evm-drawer-main div').length\n    var newCount = document.querySelector('.evm_wiser_count').textContent\n    if ($wsDrawerDivCnt == 8 && $wsInit == 0 && oldcount != newCount) {\n      $wsInit = 1\n      window.WISER_INIT('cart', 1)\n      oldcount = newCount\n      setTimeout(function () {\n        $wsInit = 0\n      }, 3000)\n    }\n  }, 00)\n}, 4000)\n</script>`
  },
  {
    id: '35',
    storeName: 'gtworldde.myshopify.com',
    themeName: 'Be Yours',
    date: '25-01-05',
    author: 'Deepika',
    code: `<script>\n   async function wiseraddedtocart() {\n  const wsopener = document.querySelector('cart-drawer');\n  wsopener.openMenuDrawer();\n  const wsres = await fetch('/?section_id=mini-cart');\n  const wstext = await wsres.text();\n  const wshtml = document.createElement('div');\n  wshtml.innerHTML = wstext;\n  const wsnewBox =                   wshtml.querySelector('.mini-cart__inner').innerHTML; \n  document.querySelector('.mini-cart__inner').innerHTML = wsnewBox;\n  document.querySelector('.mini-cart').classList.remove('is-empty');\n}\n</script>`
  },
  {
    id: '36',
    storeName: 'bodegas-ferrera.myshopify.com',
    themeName: 'wpbingo',
    date: '25-04-30',
    author: 'Deepika',
    code: `<script>\n  function wiseraddedtocart(){\n    ajaxCart.load();\n    $('body').addClass('drawer--open');\n    $('.js-drawer-close').on('click', function() {\n    $('body').removeClass('drawer--open');\n    });\n  }\n</script>`
  },
  {
    id: '37',
    storeName: 'softambient.myshopify.com',
    themeName: 'Minimog - OS 2.0',
    date: '25-04-09',
    author: 'Deepika',
    code: `<script>\n  function wiseraddedtocart(){\n  const wscart = document.querySelector('m-cart-drawer');\n  wscart.onCartDrawerUpdate();\n  wscart.open();\n  }\n</script>`
  },
  {
    id: '38',
    storeName: 'finemodesty.myshopify.com',
    themeName: 'dawn',
    date: '25-04-08',
    author: 'Deepika',
    code: `function wiseraddedtocart(){\n   $('#ws_CartDrawer').load(location.href+' #ws_CartDrawer>*','');\n    setTimeout(function () {\n      $.getJSON('/cart.js', function(cart) {\n        var ws_item_count = cart.item_count\n        $('.cart-count-bubble').remove();\n        $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');\n        $('body .header__icons #cart-icon-bubble')[0].click();\n      });\n    }, 1000);\n}`
  },
  {
    id: '39',
    storeName: 'littleweststreet.myshopify.com',
    themeName: 'Prestige',
    date: '25-04-04',
    author: 'Deepika',
    code: `<script>\nfunction wiseraddedtocart(){\n  document.documentElement.dispatchEvent(new CustomEvent('product:added', {\n            bubbles: true,\n            detail: {\n         quantity: 1\n            }\n          }));\n}\n </script>`
  },
  {
    id: '40',
    storeName: '1-itemisrael.myshopify.com',
    themeName: 'Prestige',
    date: '25-04-04',
    author: 'Deepika',
    code: `<script>\n    function wiseraddedtocart() {    \n    document.dispatchEvent(new CustomEvent('product:added', {\n        bubbles: true,\n      detail: {}\n    }));\n  }\n let $wsInit = 0;\n    setInterval(function() {\n     \n    $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\nconsole.log($wsDrawerDivCnt , '$wsDrawerDivCnt')\nconst cartDrawer11 = document.querySelector('.cart-drawer');\nif (cartDrawer11.open  && $wsDrawerDivCnt == 8 && $('#cart-drawer').css('display') == 'block' && $wsInit == 0) {\n      window.WISER_INIT('cart',1);\n       setTimeout(function () {\n      $wsInit = 0;\n    }, 3000);\n    }\n  }, 500);\n  </script>`
  },
  {
    id: '41',
    storeName: 'voltage-staging.myshopify.com',
    themeName: 'Prestige',
    date: '25-04-04',
    author: 'Deepika',
    code: `<script>\nfunction wiseraddedtocart(){\n  document.documentElement.dispatchEvent(new CustomEvent('product:added', {\n  bubbles: true,\n  detail: {      \n  quantity: 1\n}\n}));\n}\n    </script>`
  },
  {
    id: '42',
    storeName: '650226-3.myshopify.com',
    themeName: 'Origin',
    date: '25-04-03',
    author: 'Yash',
    code: `<script>\n     async function wiseraddedtocart(){\nconst wsopener = document.querySelector('cart-drawer')\n  wsopener.open()\n  const wsres = await fetch('/?section_id=cart-drawer')\n  const wstext = await wsres.text()\n  const wshtml = document.createElement('div')\n  wshtml.innerHTML = wstext\n  const wsnewBox = wshtml.querySelector('.drawer').innerHTML\n  document.querySelector('.drawer').innerHTML = wsnewBox\n  document.querySelector('.drawer').classList.remove('is-empty')\nundefined\n      }\n \nvar $wsInit = 0;\nvar $wsCartCntOld = 0;\nvar $wsInterval = setInterval(function () {\n  var $wsCartCnt = $('body .cart-count-bubble span[aria-hidden='true']').text();\n  if (\n    document.querySelector('cart-drawer').classList.contains('active') &&\n    $wsCartCnt != $wsCartCntOld &&\n    $wsInit == 0\n  ) {\n    $wsCartCntOld = $wsCartCnt;\n    $wsInit = 1;\n    window.WISER_INIT('cart', 1);\n    setTimeout(function () {\n      $wsInit = 0;\n    }, 1000);\n  }\n}, 500);\n    </script>`
  },
  {
    id: '43',
    storeName: 'voltage-staging.myshopify.com',
    themeName: 'Electro',
    date: '25-02-10',
    author: 'Deepika',
    code: `async function wiseraddedtocart() {\n  const wsopener = document.querySelector('sht-cart-drwr')\n  wsopener.openDrawer()\n  const wsres = await fetch('/?section_id=cart-drawer')\n  const wstext = await wsres.text()\n  const wshtml = document.createElement('div')\n  wshtml.innerHTML = wstext\n  const wsnewBox = wshtml.querySelector('.drawer__wrapper').innerHTML\n  document.querySelector('.drawer__wrapper').innerHTML = wsnewBox\n  document.querySelector('.drawer__wrapper').classList.remove('is-empty')\n}`
  },
  {
    id: '44',
    storeName: 'intrepid-6309.myshopify.com',
    themeName: 'Bullet',
    date: '25-02-14',
    author: 'Yash',
    code: `function wiseraddedtocart() {\n  setTimeout(() => {\n    const wsopener = document.querySelector('cart-drawer');\n    if (wsopener) {\n      wsopener.show();\n      console.log('Cart drawer shown');\n    } else {\n      console.error('cart-drawer not found!');\n    }\n  }, 500);`
  },
  {
    id: '45',
    storeName: 'gs13gg-za.myshopify.com',
    themeName: 'Concept',
    date: '25-03-20',
    author: 'Yash',
    code: `async function wiseraddedtocart() {\n  const wsopener = document.querySelector('cart-drawer')\n  if (window.cartItemsVal.length > 0) {\n    wsopener.refresh()\n  } else {\n    const wsres = await fetch('/?section_id=cart-drawer')\n    const wstext = await wsres.text()\n    const wshtml = document.createElement('div')\n    wshtml.innerHTML = wstext\n    const wsnewBox = wshtml.querySelector('.drawer__content').innerHTML\n    document.querySelector('.drawer__content').innerHTML = wsnewBox\n    const cartLink = document.querySelector('#cart-icon-bubble')\n  }\n  wsopener.open()\n}\nsetTimeout(function () {\n  var $wsInit = 0\n  var oldcount = 0\n  var $wsInterval = setInterval(function () {\n    var $wsDrawerDivCnt = document.querySelectorAll('body div.evm-drawer-main div').length\n    var newCount = document.querySelector('.evm_wiser_count').textContent\n    if ($wsDrawerDivCnt == 8 && $wsInit == 0 && oldcount != newCount) {\n      $wsInit = 1\n      window.WISER_INIT('cart', 1)\n      oldcount = newCount\n      setTimeout(function () {\n        $wsInit = 0\n      }, 3000)\n    }\n  }, 00)\n}, 5000)`
  },
  {
    id: '46',
    storeName: 'royale-lighting.myshopify.com',
    themeName: 'Concept',
    date: '25-03-25',
    author: 'Deepika',
    code: `function wiseraddedtocart() {\n  const wsopener = document.querySelector('cart-drawer')\n  wsopener.onCartRefresh()\n  wsopener.show()\n  document.querySelectorAll('.evm_wiser_count').forEach(el => el.removeAttribute('hidden'))\n}`
  },
  {
    id: '47',
    storeName: 'n2-interior.myshopify.com',
    themeName: 'Bullet',
    date: '25-03-25',
    author: 'Yash',
    code: `function wiseraddedtocart(){\n window.liquidAjaxCart.update()\n     const wscartdrawer = document.querySelector('coretex-dialog')\n     wscartdrawer.open();\n }`
  },
  {
    id: '48',
    storeName: 'ugaoo-store.myshopify.com',
    themeName: 'Be Yours',
    date: '25-03-26',
    author: 'Deepika',
    code: `async function wiseraddedtocart(){\n  const wsopener = document.querySelector('cart-drawer');\n  wsopener.openMenuDrawer();\n  const wsres = await fetch('/?section_id=mini-cart');\n  const wstext = await wsres.text();\n  const wshtml = document.createElement('div');\n  wshtml.innerHTML = wstext;\n  const wsnewBox = wshtml.querySelector('.mini-cart__inner').innerHTML;\n  document.querySelector('.mini-cart__inner').innerHTML = wsnewBox;\n  document.querySelector('.mini-cart').classList.remove('is-empty');\n}\n  var $wsInit = 0;\nvar $wsInterval = setInterval(function() {\n  var $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n  var wsChkAttr = $('.cart-drawer-container').attr('open');\n  if (wsChkAttr !== false && $wsDrawerDivCnt == 8 && $wsInit == 0) {\n    $wsInit = 1;\n    window.WISER_INIT('cart',1);\n    setTimeout(function () {\n      $wsInit = 0;\n    }, 3000);\n  }\n}, 100);`
  },
  {
    id: '49',
    storeName: '1nruwb-jm.myshopify.com',
    themeName: 'dawn',
    date: '25-03-05',
    author: 'Deepika',
    code: `function wiseraddedtocart(){\n  $('#ws_CartDrawer').load(location.href+' #ws_CartDrawer>*','');\n    setTimeout(function () {\n      $.getJSON('/cart.js', function(cart) {\n        var ws_item_count = cart.item_count\n        $('.cart-count-bubble').remove();\n        $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');\n        $('body .header__icon #cart-icon-bubble')[0].click();\n      });\n    }, 1000);\n}`
  },
  {
    id: '50',
    storeName: 'baa2ce-78.myshopify.com',
    themeName: 'Ella',
    date: '25-01-29',
    author: 'Deepika',
    code: `// Create wsHaloJs variable in theme.js file and assign value on this variable halo variable value\n\nfunction wiseraddedtocart() {\n  $.getJSON('/cart.js', function (cart) {\n    if (window.page_name === 'cart') {\n      wsHaloJs.updateCart(cart);\n    } else {\n      wsHaloJs.updateSidebarCart(cart);\n    }\n    document.querySelector('a[href='/cart']').click();\n  });\n}`
  },
  {
    id: '51',
    storeName: 'colorshow-pk.myshopify.com',
    themeName: 'Debut',
    date: '25-01-09',
    author: 'Yash',
    code: `function wiseraddedtocart() {\n  adjustCartDropDown()\n  if (!$('.cart-display #cart-container').hasClass('innew')) {\n    $('.cart-display #cardawnt-container').addClass('innew')\n    $('.cart-display .cart-title').addClass('collapsed')\n    $('.cart-display .cart-title').attr('aria-expanded', 'true')\n    $('.cart-display #cart-container').css('height', '')\n  }\n}`
  },
  {
    id: '52',
    storeName: 'kristielight.myshopify.com',
    themeName: 'Pink Paradise',
    date: '25-01-08',
    author: 'Yash',
    code: `/* file m changes h\njquery.interact-function.js\nline number : 3559\nwiserSell: function(){\n          ShowCart();\n        }\nline number: 2434\nalsoShopify.wiserSell(); */\nfunction wiseraddedtocart(){\n    window.aloShopify.wiserSell()\n    $('.mini-cart.push_side.header-icon').trigger('click')\n  }`
  },
  {
    id: '53',
    storeName: 'ensojewellery.myshopify.com',
    themeName: 'Wpbingo',
    date: '25-01-09',
    author: 'Deepika',
    code: `function wiseraddedtocart(){\n          ajaxCart.load();\n          $('body').addClass('drawer--open');\n          $('.js-drawer-close').on('click', function() {\n            $('body').removeClass('drawer--open');\n          });\n         }`
  },
  {
    id: '54',
    storeName: 'colorshow-pk.myshopify.com',
    themeName: 'Debut',
    date: '24-12-18',
    author: 'Yash',
    code: `function wiseraddedtocart(){\n  adjustCartDropDown();\n if(!$('.cart-display #cart-container').hasClass('innew')){\n      $('.cart-display #cart-container').addClass('innew');\n      $('.cart-display .cart-title').addClass('collapsed');\n      $('.cart-display .cart-title').attr('aria-expanded', 'true');\n      $('.cart-display #cart-container').css('height', '');\n    }\n}`
  },
  {
    id: '55',
    storeName: 'ca490c-bb.myshopify.com',
    themeName: 'Impact',
    date: '24-12-18',
    author: 'Deepika',
    code: `function wiseraddedtocart() {\n  const wsopener = document.querySelector('cart-drawer');\n  wsopener._onCartRefreshListener();\n  wsopener.show();\n  fetch('/cart.js')\n    .then((res) => res.json())\n    .then((cartData) => {\n      const itemCount = cartData.item_count || 0;\n      document.dispatchEvent(\n        new CustomEvent('cart:change', {\n          detail: { cart: { item_count: itemCount } },\n        })\n      );\n    });\n}`
  },
  {
    id: '56',
    storeName: 'organic-olivia.myshopify.com',
    themeName: 'be yours',
    date: '24-12-18',
    author: 'Yash',
    code: `async function wiseraddedtocart() {\n  const wsopener = document.querySelector('cart-drawer');\n  wsopener.openMenuDrawer();\n  const wsres = await fetch('/?section_id=mini-cart');\n  const wstext = await wsres.text();\n  const wshtml = document.createElement('div');\n  wshtml.innerHTML = wstext;\n  const wsnewBox = wshtml.querySelector('.mini-cart__inner').innerHTML;\n  document.querySelector('.mini-cart__inner').innerHTML = wsnewBox;\n  document.querySelector('.mini-cart').classList.remove('is-empty');\n}`
  },
  {
    id: '57',
    storeName: 'maxxusindustries.myshopify.com',
    themeName: 'Dawn',
    date: '24-12-18',
    author: 'Deepika',
    code: `function wiseraddedtocart() {\n    const wscart = document.querySelector('cart-notification');\n   wscart.renderCartContent();\n   wscart.open();\n    }`
  },
  {
    id: '58',
    storeName: 'another-level-beauty-supply-llc.myshopify.com',
    themeName: 'Ella',
    date: '24-12-13',
    author: 'Deepika',
    code: `// Create wsHaloJs variable in theme.js file and assign value on this variable halo variable value\n\nfunction wiseraddedtocart() {\n  $.getJSON('/cart.js', function (cart) {\n    if (window.page_name === 'cart') {\n      wsHaloJs.updateCart(cart);\n    } else {\n      wsHaloJs.updateSidebarCart(cart);\n    }\n    document.querySelector('a[href='/cart']').click();\n  });\n}`
  },
  {
    id: '59',
    storeName: '179bd3.myshopify.com',
    themeName: 'Kalles',
    date: '24-12-12',
    author: 'Yash',
    code: `function wiseraddedtocart(){\n         window.T4SThemeSP.Cart.getToFetch();\n  $('.t4s-site-nav__cart svg').trigger('click');\n     }`
  },
  {
    id: '60',
    storeName: 'q5r1im-rd.myshopify.com',
    themeName: 'Shrine PRO',
    date: '24-12-11',
    author: 'Deepika',
    code: `async function wiseraddedtocart() {\n  $.getJSON('/cart.js', function (cart) {\n    var ws_item_count = cart.item_count;\n    $('.cart-count-bubble').remove();\n    $('#cart-icon-bubble').append(\n      '<div class='cart-count-bubble'><span aria-hidden='true'>' +\n        ws_item_count +\n        '</span><span class='visually-hidden'>' +\n        ws_item_count +\n        ' item</span></div>'\n    );\n  });\n  const wsDrawerSelector = document.querySelector('cart-drawer');\n  const wsres = await fetch('/?section_id=cart-drawer');\n  const wstext = await wsres.text();\n  const wshtml = document.createElement('div');\n  wshtml.innerHTML = wstext;\n  const wsnewBox = wshtml.querySelector('.drawer__inner').innerHTML;\n  document.querySelector('.drawer__inner').innerHTML = wsnewBox;\n  document.querySelector('.drawer').classList.remove('is-empty');\n  const cartLink = document.querySelector('#cart-icon-bubble');\n  wsDrawerSelector.open();\n}`
  },
  {
    id: '61',
    storeName: 'zenescope.myshopify.com',
    themeName: 'Xtra',
    date: '24-12-03',
    author: 'Yash',
    code: `function wiseraddedtocart() {\n  window.ajaxCart.init();\n  window.ajaxCart.load();\n}\n\n// Theme based code\n$(document).ready(function () {\n  var $wsInit = 0;\n  let $wsCartCntOld = 0;\n\n  var $wsInterval = setInterval(function () {\n    $wsDrawerDivCnt = $('body div.evm-drawer-main > div').length;\n    let $wsCartCntnew = $('.evm_wiser_count').text();\n    if (\n      $('#cart').attr('aria-hidden') === 'false' &&\n      $wsInit == 0 &&\n      $wsCartCntnew != $wsCartCntOld &&\n      $wsDrawerDivCnt == 8\n    ) {\n      $wsCartCntOld = $wsCartCntnew;\n      $wsInit = 1;\n      window.WISER_INIT('cart', 1);\n      setTimeout(function () {\n        $wsInit = 0;\n      }, 3000);\n    }\n  }, 1000);\n});`
  },
  {
    id: '62',
    storeName: 'metapod-com.myshopify.com',
    themeName: 'Impact',
    date: '24-12-03',
    author: 'Deepika',
    code: `function  wiseraddedtocart() {\n  const wsopener = document.querySelector('cart-drawer')\n    wsopener._onCartRefreshListener();\n wsopener.show()\n  const cartCount = document.querySelector('cart-count');\nif (cartCount.style.opacity === '0' || !cartCount.style.opacity) {\n  cartCount.style.opacity = '1';\n  } \n  // Theme based code\n  var $wsInit = 0;\nvar $wsInterval = setInterval(function() {\n  var $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n  var wsChkAttr = $('cart-drawer').attr('open');\n  if (typeof wsChkAttr !== 'undefined' && wsChkAttr !== false && $wsDrawerDivCnt == 8 && $wsInit == 0) {\n    $wsInit = 1;\n    window.WISER_INIT('cart',1);\n    setTimeout(function () {\n      $wsInit = 0;\n    }, 3000);\n  }\n}, 100);`
  },
  {
    id: '63',
    storeName: 'soulandmore.myshopify.com',
    themeName: 'Sense',
    date: '24-12-02',
    author: 'Yash',
    code: `async function wiseraddtocart(){\n        const wsDrawerSelector = document.querySelector('cart-drawer');\n     const res = await fetch('/?section_id=cart-drawer');\n       const text = await res.text(); console.log(text , 'inside')\n        const html = document.createElement('div');\n    html.innerHTML = text;\n        const newBox = html.querySelector('.drawer__inner').innerHTML;\n    document.querySelector('.drawer__inner').innerHTML = newBox;\n   document.querySelector('.drawer').classList.remove('is-empty');\n   const cartLink = document.querySelector('#cart-icon-bubble');\n    wsDrawerSelector.open()\n      }`
  },
  {
    id: '64',
    storeName: 'zoelle-fit.myshopify.com',
    themeName: 'Impulse',
    date: '24-11-27',
    author: 'Deepika',
    code: `function wiseraddedtocart() {\n  new theme.CartDrawer();\n  $('.js-drawer-open-cart span').trigger('click');\n}`
  },
  {
    id: '65',
    storeName: 'warnerbrothers-shop.myshopify.com',
    themeName: 'Impulse',
    date: '24-11-27',
    author: 'Deepika',
    code: `function wiseraddedtocart() {\n  new theme.CartDrawer();\n  $('.js-drawer-open-cart span').trigger('click');\n}`
  },
  {
    id: '66',
    storeName: 'startrek-shop.myshopify.com',
    themeName: 'Avalanche',
    date: '24-11-27',
    author: 'Yash',
    code: `function wiseraddedtocart(){\n      setTimeout(function () {\n      $.getJSON('/cart.js', function(cart) {\n        var ws_item_count = cart.item_count\n        $('.cart-count-bubble').remove();\n        $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');\n        $('body .header__icons #cart-icon-bubble')[0].click();\n      });\n    }, 1000);\n}`
  },
  {
    id: '67',
    storeName: 'nbcuniversal.myshopify.com',
    themeName: 'Avalanche',
    date: '24-11-27',
    author: 'Deepika',
    code: `function wiseraddedtocart(){\n    setTimeout(function () {\n      $.getJSON('/cart.js', function(cart) {\n        var ws_item_count = cart.item_count\n        $('.cart-count-bubble').remove();\n        $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');\n        $('body .header__icons #cart-icon-bubble')[0].click();\n        $('#shopify-section-cart-drawer .my-cart, .cart-close-button, .cart-drawer-overlay').addClass('open');\n        window.postMessage({ type: 'cart_drawer', action: 'open'}, '*');\n      });\n    }, 1000);\n}`
  },
  {
    id: '68',
    storeName: 'fox-pos.myshopify.com',
    themeName: 'dawn',
    date: '24-11-25',
    author: 'Deepika',
    code: `function wiseraddedtocart(){\n      $('#ws_CartDrawer').load(location.href+' #ws_CartDrawer>*','');\n    setTimeout(function () {\n      $.getJSON('/cart.js', function(cart) {\n        var ws_item_count = cart.item_count\n        $('.cart-count-bubble').remove();\n        $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');\n        $('body .header__icons #cart-icon-bubble')[0].click();\n      });\n    }, 1000);\n}`
  },
  {
    id: '69',
    storeName: 'poppys-of-atlanta.myshopify.com',
    themeName: 'Testament',
    date: '24-11-25',
    author: 'Yash',
    code: `function wiseraddedtocart(){\n      let ws_drawerConfig = document.getElementById('cart-config');\n        ws_drawerConfig = JSON.parse(config.innerHTML || '{}');\n      Shopify.theme.ajaxCart.showDrawer(ws_drawerConfig);\n     \n      }\n     \n      var $wsInit = 0;\n          let $wsCartCntOld = 0;\n          var $wsInterval = setInterval(function() {\n          $wsDrawerDivCnt = $('body div.evm-drawer-main > div').length;\n          let $wsCartCntnew = $('.cart-links__link-cart .button-as-link .js-cart-count').text();\n           \n          if ($('body .slideout__drawer-right.mini-cart').hasClass('slideout--active') && $wsInit == 0  && $wsCartCntnew != $wsCartCntOld) {\n            $wsCartCntOld = $wsCartCntnew;\n            $wsInit = 1;\n            window.WISER_INIT('cart',1);\n            console.log(' 22222 ')\n            setTimeout(function () {\n              $wsInit = 0;\n            }, 3000);\n          }\n      }, 100);`
  },
  {
    id: '70',
    storeName: 'vcbs-yellowstone.myshopify.com',
    themeName: 'Avalanche',
    date: '24-11-21',
    author: 'Yash',
    code: `async function wiseraddedtocart() {    \n  const wsres = await fetch('/?section_id=cart-icon-bubble');\n    const wsText = await wsres.text();\n   const wshtml = document.createElement('div');\n      wshtml.innerHTML = wsText;\n    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;\nconst cartIconElement = document.querySelector('#cart-icon-bubble.header__icon');\ncartIconElement.innerHTML = wsnewBox;\n  const wsrescart = await fetch('/?section_id=cart-drawer');\n  const wstextcart = await wsrescart.text();\n  const wshtmlcart = document.createElement('div');\n  wshtmlcart.innerHTML = wstextcart;\n  const wsnewBoxCart =wshtmlcart.querySelector('#shopify-section-cart-drawer .cart-container').innerHTML;\n  document.querySelector('#shopify-section-cart-drawer .cart-container').innerHTML = wsnewBoxCart;\n   $('body .header__icons #cart-icon-bubble')[0].click();\n  }`
  },
  {
    id: '71',
    storeName: 'the-wondery-shop.myshopify.com',
    themeName: 'Avalanche',
    date: '24-11-14',
    author: 'Yash',
    code: `function wiseraddedtocart() {    \n        setTimeout(function () {\n      $.getJSON('/cart.js', function(cart) {\n        var ws_item_count = cart.item_count\n        $('.cart-count-bubble').remove();\n        $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');\n        $('body .header__icons #cart-icon-bubble')[0].click();\n      });\n    }, 1000);\n\n\n      }\n\n\n/*wiser Code to show  widgets in cart drawer  */\n    var $wsInit = 0;\n    var $wsInterval = setInterval(function () {\n      var $wsCartCnt =  $('.header__icon--cart span[data-ajax-cart-bind-state]').text()[0];\n      $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n      if ($('body .cart-drawer-overlay').hasClass('open') && $wsDrawerDivCnt == 8 && $wsInit == 0) {                \n       $wsInit = 1;\n        window.WISER_INIT('cart', 1);\n        setTimeout(function () {\n          $wsInit = 0;\n        }, 5000);\n      }\n    }, 100);`
  },
  {
    id: '72',
    storeName: 'the-perfect-hoop.myshopify.com',
    themeName: 'Spark',
    date: '24-11-11',
    author: 'Yash',
    code: `function wiseraddedtocart(){\n  const quickCartInstance = window.quickCartInstance(document.querySelector('.quick-cart'))\n quickCartInstance.open();\n}`
  },
  {
    id: '73',
    storeName: '9bd82c-2.myshopify.com',
    themeName: 'Stiletto',
    date: '24-11-11',
    author: 'Yash',
    code: `function wiseraddedtocart() {\n  if (window.quickCartInstance && typeof window.quickCartInstance.openQuickCart === 'function') {\n    window.quickCartInstance.refreshQuickCart();\n        setTimeout(() => {\n           window.quickCartInstance.openQuickCart();\n          }, 300);\n  }\n  }\n \n  // theme based code\n       \n        var $wsInit = 0;\n        var $wsInterval = setInterval(function () {\n          var $wsCartCnt = $('.evm_wiser_count').text()[0];\n          $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n          if ($('body .quick-cart__wrapper').hasClass('active') &&            $wsDrawerDivCnt == 8 && $wsInit == 0) {                \n           $wsInit = 1;\n            window.WISER_INIT('cart', 1);\n            setTimeout(function () {\n              $wsInit = 0;\n            }, 5000);\n          }\n        }, 100);`
  },
  {
    id: '74',
    storeName: 'marithefrancoisgirbaud.myshopify.com',
    themeName: 'Symmetry',
    date: '24-11-07',
    author: 'Deepika',
    code: `function wiseraddedtocart(){\n    $('.cart-drawer').load(location.href + ' .cart-drawer>*', '');\n$.getJSON('/cart.js', function(cart) {\n  var ws_item_count = cart.item_count\n  $('.cart-link__count').remove();\n  $('.cart-link__icon').append(\`<span class='cart-link__count'>\${ws_item_count}</span> \`)\n  setTimeout(function() {\n    $('body .cart-link__icon').trigger('click');\n  }, 1000 );\n});\n}`
  },
  {
    id: '75',
    storeName: 'revision-skincare.myshopify.com',
    themeName: 'dawn',
    date: '24-11-07',
    author: 'Deepika',
    code: `// No specific code provided in source, just theme name. \n// Please verify if code is needed.`
  },
  {
    id: '76',
    storeName: 'vapingland-com.myshopify.com',
    themeName: 'ella',
    date: '24-10-23',
    author: 'Deepika',
    code: `function wiseraddedtocart(){\n    $.getJSON('/cart.js', function(cart) {\n      if (window.page_name === 'cart') {\n        wsHaloJs.updateCart(cart);\n      }else{\n        wsHaloJs.updateSidebarCart(cart);  \n      }\n       document.querySelector('a[href='/cart']').click()\n    });\n  }`
  },
  {
    id: '77',
    storeName: 'd8dc91-1a.myshopify.com',
    themeName: 'Beauty',
    date: '24-10-16',
    author: 'Deepika',
    code: `function wiseraddedtocart(){\n    $(document).on('click', '#CartDrawer-Overlay', function(e) {\n      e.preventDefault();\n      $('#CartDrawer').parent().removeClass('active');\n    });  \n    $('.drawer').load(location.href + ' .drawer>*', '');\n    setTimeout(function() {\n      $('.drawer').addClass('active');\n      $('.drawer').removeClass('is-empty');\n    },1000);\n   }`
  },
  {
    id: '78',
    storeName: 'rforrabbit1.myshopify.com',
    themeName: 'Ella',
    date: '24-09-13',
    author: 'Neeraj',
    code: `function wiseraddedtocart(){\n    $.getJSON('/cart.js', function(cart) {\n      if (window.page_name === 'cart') {\n        wsHaloJs.updateCart(cart);\n      }else{\n        wsHaloJs.updateSidebarCart(cart);  \n      }\n      window.OPEN_CART();\n    });\n  }\n\n\n  /* theme based code */\n  var $wsInit = 0;\n  var $wsCartCntOld = 0;\n  var $wsInterval = setInterval(function () {\n    var $wsCartCnt = parseInt($('.cart-count-bubble .text').text());\n    if ($('body').hasClass('cart-sidebar-show') && $wsCartCnt != $wsCartCntOld && $wsInit == 0) {\n      $wsInit = 1;\n      $wsCartCntOld = $wsCartCnt;\n     window.WISER_INIT('cart', 1);\n      setTimeout(function () {\n        $wsInit = 0;\n      }, 3000);\n    }\n  }, 500);`
  },
  {
    id: '79',
    storeName: '6dc86d-ba.myshopify.com',
    themeName: 'Eurus',
    date: '24-09-12',
    author: 'Yash',
    code: `function wiseraddedtocart(){\n    Alpine.store('xMiniCart').reLoad();\n   Alpine.store('xMiniCart').openCart();\n }`
  },
  {
    id: '80',
    storeName: 'centrale-fillers.myshopify.com',
    themeName: 'Gradibase',
    date: '24-09-02',
    author: 'Neeraj',
    code: `var wsChkFao = 0;\n    wsGetCartCntOld = 0;\n    let wsCartInterValFao = setInterval(function() {\n    let wsGetCartCnt = $('.button-cart-counter').text();\n      if (parseInt(wsGetCartCnt) != parseInt(wsGetCartCntOld) && wsChkFao == 0) {\n        window.WISER_INIT('cart',1);\n        wsChkFao = 1;\n        wsGetCartCntOld = wsGetCartCnt;\n        // clearInterval(wsCartInterValFao);\n        setTimeout(function () {\n          wsChkFao = 0;\n        }, 3000);\n      }\n    }, 100);`
  },
  {
    id: '81',
    storeName: 'fao-schwarz.myshopify.com',
    themeName: 'Impulse',
    date: '24-09-03',
    author: 'Neeraj',
    code: `var wsChkFao = 0;\n  setTimeout(function () {\n    let wsCartInterValFao = setInterval(function() {\n      if ($('.cart-link__bubble').hasClass('cart-link__bubble--visible') && wsChkFao == 0) {\n        wsChkFao = 1;\n        clearInterval(wsCartInterValFao);\n        window.WISER_INIT('cart',1);\n      }\n    }, 500);\n  }, 4000);\n \n  function wiserOpenCartDrawer(pid){\n   fetch('/cart/add.js', {\n      method: 'POST',\n      headers: {\n          'Content-Type': 'application/json',\n          'Accept': 'application/json'\n      },\n      body: JSON.stringify({\n          id: pid,\n          quantity: 1\n      })\n    })\n    .then(response => response.json())\n    .then(data => {\n      window.WISER_INIT('cart',1);\n      $('.evm-wi-quick-close-btn').trigger('click');\n      const wsCartObjQickView = new theme.CartDrawer();\n      wsCartObjQickView.open();\n    })\n    .catch((error) => {\n      console.error('Error:', error);\n    });\n  }\n   // theme based code\n  function wiseraddedtocart(){\n    const wsCartDrawerObj = new themen.CartDrawer();\n    wsCartDrawerObj.open();\n    window.WISER_INIT('cart',1);\n  }`
  },
  {
    id: '82',
    storeName: '1921movement.myshopify.com',
    themeName: 'Dawn',
    date: '24-09-02',
    author: 'Deepika',
    code: `<script>\n function wiseraddedtocart(){\n    const wsevent = new CustomEvent('wiser:addedToCart');\n    window.dispatchEvent(wsevent);\n  }\n </script>`
  },
  {
    id: '83',
    storeName: 'royale-lighting.myshopify.com',
    themeName: 'Warehouse',
    date: '24-08-30',
    author: 'Deepika',
    code: `<script>\n function wiseraddedtocart(){\ndocument.documentElement.dispatchEvent(new CustomEvent('product:added', {\n      bubbles: true,\n        detail: {\n         quantity: 1\n       }\n     }));\n }\n </script>`
  },
  {
    id: '84',
    storeName: 'camessi-collection.myshopify.com',
    themeName: 'Taiga',
    date: '24-08-01',
    author: 'Deepika',
    code: `<script>\nfunction wiseraddedtocart(){\ndocument.dispatchEvent(new CustomEvent('ajaxProduct:added', {\n}));\n  }\n </script>`
  },
  {
    id: '85',
    storeName: 'jean-rachel-jewelry.myshopify.com',
    themeName: 'Pipeline',
    date: '24-06-25',
    author: 'Deepika',
    code: `var $wsInit = 0;\n    var oldCount = 0;\n      var $wsInterval = setInterval(function() {\n        const spanElement = document.getElementById('evm_cart_count');\n          var newCount = spanElement.dataset.headerCartCount      \n        $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n        if ($wsDrawerDivCnt == 8 && $wsInit == 0 && oldCount !=  newCount) {  \nconsole.log('In')  \n          $wsInit = 1;\n          window.WISER_INIT('cart',1);\n          setTimeout(function () {\n            $wsInit = 0;\n          }, 3000);\n        }\n      }, 1000);`
  },
  {
    id: '86',
    storeName: 'indiatrend1.myshopify.com',
    themeName: 'Forge',
    date: '24-06-21',
    author: 'Yash',
    code: `function wiseraddedtocart() {          \n    let config = document.getElementById('cart-config');\n        if ( !config ) return false;\n        config = JSON.parse(config.innerHTML || '{}');\n         console.log(config)  \n   \n   \n    window.WAU.ThemeCart.getCart()\n      .then(cartData => {        \n         return cartData;\n     })\n      .then(finalValue => {\n        window.WAU.AjaxCart.updateView(config, finalValue);  \n          if (!$('.slideout__drawer-right.mini-cart').hasClass('slideout--active')){\n            $('.slideout__trigger--open span').trigger( 'click' )\n         }    \n      })\n      .catch(error => {\n        // Handle any errors that occur during the promise chain\n        console.error('Error:', error);\n      });\n    }\n    <script>\n    var $wsInit = 0;\n    var oldCount = 0;\n      var $wsInterval = setInterval(function() {\n          var newCount = document.querySelector('.js-mini-cart-trigger .js-cart-count').innerText      \n        $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n        if ($('.slideout__drawer-right.mini-cart').hasClass('slideout--active') && $wsDrawerDivCnt == 8 && $wsInit == 0 && oldCount !=  newCount) {      \n          $wsInit = 1;\n          window.WISER_INIT('cart',1);\n          setTimeout(function () {\n            $wsInit = 0;\n          }, 3000);\n        }\n      }, 1000);\n      </script>`
  },
  {
    id: '87',
    storeName: 'stratum-aesthetics.myshopify.com',
    themeName: 'Pipeline',
    date: '24-06-21',
    author: 'Deepika',
    code: `function wiseraddedtocart() {          \ndocument.documentElement.dispatchEvent(new CustomEvent('theme:cart:init', { bubbles: true }));\ndocument.dispatchEvent(new CustomEvent('theme:cart:reload', { bubbles: true }));  \n}`
  },
  {
    id: '88',
    storeName: 'imperio-brazilian.myshopify.com',
    themeName: 'Dawn',
    date: '24-06-17',
    author: 'Yash',
    code: `wiseraddtocart()`
  },
  {
    id: '89',
    storeName: 'skillmaticsindia.myshopify.com',
    themeName: 'Wokiee',
    date: '24-06-14',
    author: 'Yash',
    code: `$( document ).ready(function() {\n  var $wsInit = 0;\n  var $wsCartCntOld = 0;\n  var $wsInterval = setInterval(function() {\n  var $wsCartCnt    = parseInt($('.tt-badge-cart').text())\nvar parentElement = $('.hs-sticky-cart');\n      var emptyElement = $('.hs-empty-cart');\n      var newElement = $(\`<div class='evm-drawer-main' data-scrollable>\n                        <div class='evm-drawer-related-product'></div>\n                        <div class='evm-drawer-related-viewed-browsing'></div>\n                        <div class='evm-drawer-recommended-products'></div>\n                        <div class='evm-drawer-recently-viewed'></div>\n                        <div class='evm-drawer-arrivals-product'></div>\n                        <div class='evm-drawer-featured-product'></div>\n                        <div class='evm-drawer-popular-products'></div>\n                        <div class='evm-drawer-trending-products'></div>\n                        </div>\`);\n    if ($('.hs-popup-cart-sp-load').hasClass('hs-active') && $wsCartCnt != $wsCartCntOld && $wsInit == 0) {\nvar $wsDrawerDivCnt  = $('body div.evm-drawer-main  div').length;      \n        if($wsCartCnt > 0 &&  $wsDrawerDivCnt < 8){\n            parentElement.after(newElement);\n        }\n           \n      $wsCartCntOld = $wsCartCnt;\n      $wsInit = 1;\n      window.WISER_INIT('cart',1);\n      setTimeout(function () {\n        $wsInit = 0;\n      }, 3000);\n    }\n        if ($('.hs-popup-cart-sp-load').hasClass('hs-active') && $('.hs-empty-cart') && $wsInit == 0) {  \n          var $wsDrawerDivCnt  = $('body div.evm-drawer-main  div').length;\n          if($wsCartCnt == 0 && $wsDrawerDivCnt < 8 ){        \n          emptyElement.after(newElement);\n          }\n       $wsInit = 1;\n          if($wsDrawerDivCnt == 8 ){\n            window.WISER_INIT('cart',1);\n            $('.hs-body-layout').css({'overflow-y': 'auto'})\n          }        \n        setTimeout(function () {\n          $wsInit = 0;\n        }, 3000);\n       }\n  }, 500);\n});`
  },
  {
    id: '90',
    storeName: 'rmid.myshopify.com',
    themeName: 'Palo Alto',
    date: '24-06-14',
    author: 'Yash',
    code: `function wiseraddedtocart() {\n  window.cart.getCart()\n  window.cart.openCartDrawer()\n}\n\n\n/* tehem based code */\n\n\n$( document ).ready(function() {\n  var ws_flag = 0;\n  var cart_count_old = 0 ;\n// var cartHasItem = window.cart.hasItemsInCart();  \nsetInterval(function () {\n  var cart_count = window.cart.items.length\n  var drawer = document.getElementById('evm-drawer-main');\n\n\n  if (drawer != null){\n     if (cart_count == 0) {\n    drawer.style.display = 'none';\n  } else {\n    drawer.style.display = 'block';\n  }\n  }\n    if (cart_count_old != cart_count && cart_count > 0   && ws_flag == 0) {      \n      ws_flag = 1;\n      cart_count_old = cart_count;\n      window.WISER_INIT('cart',1);\n      setTimeout(function() {          \n        ws_flag= 0;\n      }, 3000);\n    }\n  }, 100);\n})`
  },
  {
    id: '91',
    storeName: 'hardman-design-eu.myshopify.com',
    themeName: 'Split',
    date: '24-06-16',
    author: 'Yash',
    code: `function wiseraddedtocart(){\n  window.refreshCart();\n}\nwiseraddedtocart();\n\n/* theme based code */\n\n\nvar $wsInit = 0;\nvar old_cartCount= 0;\n  var $wsInterval = setInterval(function() {\nvar cartCount  = document.querySelector('[data-header-cart-count]').innerText;\n   \n      $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\nconsole.log('$wsDrawerDivCnt' , $wsDrawerDivCnt)\n    if ($('body #site-cart').hasClass('active') && old_cartCount !== cartCount && $wsInit == 0) {\n      $wsInit = 1;\n      old_cartCount = cartCount\n      window.WISER_INIT('cart',1);\n      setTimeout(function () {\n        $wsInit = 0;\n      }, 3000);\n    }\n  }, 1000);`
  },
  {
    id: '92',
    storeName: '237a95-2.myshopify.com',
    themeName: 'Impulse',
    date: '24-05-23',
    author: 'Deepika',
    code: `<script>\n      function wiseraddedtocart(){\n     \t\tconst wsCartDrawerObj = new themen.CartDrawer();\n        wsCartDrawerObj.open();\n        }\n    </script>`
  },
  {
    id: '93',
    storeName: 'minimalist-global.myshopify.com',
    themeName: 'Motion',
    date: '24-05-22',
    author: 'Yash',
    code: `function wiseraddedtocart(){\n  var cartNew  = new theme.CartDrawer();\n  document.body.classList.add('cart-has-items');\n  cartNew.cartForm.updateCount();\n  cartNew.drawer.open();\n }\n\n\n\n\n\n\n//  theme based code\n    var old_cart_count = 0;\n  setInterval(function () {\n    var cart_count = $('.cart-link__bubble').attr('data-items');\n    if ($('#CartDrawer').hasClass('drawer--is-open') && cart_count != old_cart_count) {\n      old_cart_count = cart_count;\n      window.WISER_INIT('cart',1);\n    }\n  }, 100);`
  },
  {
    id: '94',
    storeName: 'b11b0d-2.myshopify.com',
    themeName: 'Motion',
    date: '24-05-08',
    author: 'Deepika',
    code: `function wiseraddedtocart(){\n  var cartNew  = new theme.CartDrawer();\n  document.body.classList.add('cart-has-items');\n  cartNew.cartForm.updateCount();\n  cartNew.drawer.open();\n }`
  },
  {
    id: '95',
    storeName: 'birch-robot.myshopify.com',
    themeName: 'Streamline',
    date: '24-05-03',
    author: 'Yash',
    code: `function wiseraddedtocart(){\n  var cartNew  = new theme.CartDrawer();\n  document.body.classList.add('cart-has-items');\n  cartNew.cartForm.updateCount();\n  cartNew.drawer.open();\n }`
  },
  {
    id: '96',
    storeName: 'hypeach-boutique.myshopify.com',
    themeName: 'Upscale',
    date: '24-04-30',
    author: 'Neeraj',
    code: `function wiseraddedtocart(){\n        $('#CartDrawer').load(location.href + ' #CartDrawer>*', '');\n        setTimeout(function() {\n          const wsChkAriaExpd = $('#HeaderCartIcon button').attr('aria-expanded');\n          if(wsChkAriaExpd == 'false') {\n            $('#HeaderCartIcon button').trigger('click');\n          }\n        }, 1000);\n        setTimeout(function () {\n          $.getJSON('/cart.js', function(cart) {\n            var ws_item_count = cart.item_count\n            $('.header-cart-icon__count').remove();\n            $('#HeaderCartIcon').append('<div class='header-cart-icon__count  small-text'><span class='evm_wiser_count' aria-hidden='true'>'+ws_item_count+'</span><span class='sr-only'>'+ws_item_count+' item</span></div>');        \n          });\n         }, 1000);          \n      }\n\n      /* LOAD WIDGETS ON-LOAD CART DRAWER */\n      var $wsInit = 0;\n      var $wsInterval = setInterval(function() {\n        var $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;        \n        var wsChkAttr = $('#CartDrawer').attr('open');        \n        if (typeof wsChkAttr !== 'undefined' && wsChkAttr !== false && $wsDrawerDivCnt == 8 && $wsInit == 0) {          \n          $wsInit = 1;          \n          window.WISER_INIT('cart',1);          \n          setTimeout(function () {\n            $wsInit = 0;\n          }, 3000);          \n        }\n      }, 2000);`
  },
  {
    id: '97',
    storeName: 'wholesale-matrboomie-com.myshopify.com',
    themeName: 'Custom',
    date: '24-04-22',
    author: 'Deepika',
    code: `<!--Wiser cartdrwaer shipping bar-->\n{% if customer %}\n  {% assign tag_to_check = 'RPP' %}\n  {% assign customer_tags = customer.tags | split: ', ' %}\n  {% for tag in customer_tags %}\n    {% if tag contains tag_to_check %}\n       <style>\n         div#wsFsbMain, div#wsProgWr {\n              display: none;\n          }\n       </style>    \n      {% endif %}\n  {% endfor %}\n{% endif %}\n<!--Wiser cartdrwaer shipping bar end-->`
  },
  {
    id: '98',
    storeName: 'raithclothing.myshopify.com',
    themeName: 'impulse',
    date: '24-04-11',
    author: 'Neeraj',
    code: `wiseraddedtocart();\n   function wiseraddedtocart(){\n     new theme.CartDrawer();\n     $('.js-drawer-open-cart span').trigger('click');\n   }`
  },
  {
    id: '99',
    storeName: 'fail-forward-clothing.myshopify.com',
    themeName: 'Symmetry',
    date: '24-04-10',
    author: 'Neeraj',
    code: `wiseraddedtocart();\nfunction wiseraddedtocart() {\n  $('.cart-drawer').load(location.href + ' .cart-drawer>*', '');\n  $.getJSON('/cart.js', function(cart) {\n    var ws_item_count = cart.item_count\n    $('.cart-link__count').remove();\n    $('.cart-link__icon').append(\`<span class='cart-link__count'>\${ws_item_count}</span> \`)\n    setTimeout(function() {\n      $('body .cart-link__icon').trigger('click');\n    }, 1000 );\n  });\n}`
  },
  {
    id: '100',
    storeName: 'tony-by-toni.myshopify.com',
    themeName: 'Motion',
    date: '24-04-04',
    author: 'Admin',
    code: `function wiseraddedtocart() {\n    new theme.CartDrawer();\n    document.querySelector('.js-drawer-open-cart').click();\n}`
  },
  {
    id: '101',
    storeName: 'yesterhome.myshopify.com',
    themeName: 'Symmetry',
    date: '24-02-16',
    author: 'Yash',
    code: `function wiseraddedtocart(){\n    document.documentElement.dispatchEvent(new CustomEvent('theme:cartchanged', { bubbles: true, cancelable: false, detail: { openDrawer: true } }));\n  }`
  },
  {
    id: '102',
    storeName: 'gorecon1.myshopify.com',
    themeName: 'Athens',
    date: '24-02-14',
    author: 'Yash',
    code: `function  wiseraddedtocart() {\n    window.SLIDECART_UPDATE();\n     window.SLIDECART_OPEN();    \n   }`
  },
  {
    id: '103',
    storeName: 'alter-ego-running.myshopify.com',
    themeName: 'Impulse',
    date: '24-02-12',
    author: 'Neeraj',
    code: `wiseraddedtocart();\n   function wiseraddedtocart(){\n     new theme.CartDrawer();\n     $('.js-drawer-open-cart span').trigger('click');\n   }\n\n\n  // Theme Based code\n  var $wsInit = 0;\n  var $wsInterval = setInterval(function() {\n    $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n    if ($('body #CartDrawer').hasClass('drawer--is-open') && $wsDrawerDivCnt == 8 && $wsInit == 0) {\n      $wsInit = 1;\n      window.WISER_INIT('cart',1);\n      setTimeout(function () {\n        $wsInit = 0;\n      }, 3000);\n    }\n  }, 1000);`
  },
  {
    id: '104',
    storeName: 'royal-republiq.myshopify.com',
    themeName: 'Prestige',
    date: '24-02-09',
    author: 'Neeraj',
    code: `var ws_cnt = 0;\n  function  wiseraddedtocart(e = '') {\n    // e.stopPropagation()\n    document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {bubbles: true}));      \n    if($('#cart-drawer').attr('open') !== 'open' ) $('body a[aria-controls=cart-drawer] span ').trigger('click');  \n  }\n  var $wsInterval = setInterval(function() {\n    $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n    if ($('body .header__cart-dot').hasClass('is-visible') && $wsDrawerDivCnt == 8 && $('#cart-drawer').css('display') == 'block') {\n      console.log('in')\n      window.WISER_INIT('cart',1);\n    }\n  }, 500);`
  },
  {
    id: '105',
    storeName: 'snap-deal-1.myshopify.com',
    themeName: 'Custom',
    date: '24-02-08',
    author: 'Yash',
    code: `// wiser code\n\t\tvar ws_flag = 0;\n\t\tvar old_cart_count = 0;\n\t\tsetInterval(function () {\n\t\t\tvar cart_count =  $('.cart-full span').text();\n\t\t\tif ($('body[class*='template-']').hasClass('cart-active') && cart_count != '' && cart_count != old_cart_count && ws_flag == 0) {\n\t\t\t\t\n              old_cart_count = cart_count;\n\t\t\t\tws_flag = 1;\n\t\t\t\twindow.WISER_INIT('cart',1);\n\t\t\t}\n\t\t\tsetTimeout(function(){ ws_flag = 0 }, 5000);\n\t\t}, 100);`
  },
  {
    id: '106',
    storeName: 'snap-deal-1.myshopify.com',
    themeName: 'Snapdeal',
    date: '24-02-08',
    author: 'P',
    code: `function wiseraddedtocart(){\n  \t$('li .site-header__cart-toggle span').trigger('click');       \n  }`
  },
  {
    id: '107',
    storeName: 'boconi.myshopify.com',
    themeName: 'Reformation',
    date: '24-02-08',
    author: 'P',
    code: `async function wiseraddedtocart() {\n  try {\n      const cart = await getCartData('/cart.js');\n\n\n      // Extracting the item count from the cart object\n      const ws_item_count = cart.item_count;\n\n\n      // Updating the text content of elements with class 'thb-item-count' with the item count\n      $('.thb-item-count').text(ws_item_count);\n\n\n      // Reloading the content of an element with id 'Cart-Drawer' from the current location\n      await loadCartDrawer();\n\n\n      // Triggering a click event on an element with id 'cart-drawer-toggle'\n      $('#cart-drawer-toggle div').trigger('click');\n  } catch (error) {\n      console.error('Error:', error);\n  }location.href\n}\n\n\nfunction getCartData(url) {\n  return new Promise((resolve, reject) => {\n      $.ajax({ \n          url: url,\n          dataType: 'json',\n          success: function (data) {\n              resolve(data);\n          },\n          error: function (xhr, status, error) {\n              reject(error);\n          }\n      });\n  });\n}\n\n\nfunction loadCartDrawer() {\n  return new Promise((resolve) => {\n      $('#Cart-Drawer').load(location.href + ' #Cart-Drawer>*', '', function () {\n          resolve();\n      });\n  });\n}`
  },
  {
    id: '108',
    storeName: '7cd45b-2.myshopify.com',
    themeName: 'Motion',
    date: '24-01-18',
    author: 'Evm-old',
    code: `wiseraddedtocart();\nfunction wiseraddedtocart() {\n    new theme.CartDrawer();\n    document.querySelector('.js-drawer-open-cart').click();\n}`
  },
  {
    id: '109',
    storeName: 'lindasdekor.myshopify.com',
    themeName: 'Stiletto',
    date: '24-01-17',
    author: 'P',
    code: `wiseraddtocart();\nfunction wiseraddtocart() {\n  $('.quick-cart__container').load(location.href + ' .quick-cart__container>*', '');\n  setTimeout(function() {\n    $('body header a .icon-button.icon-button-header-shopping-cart').trigger('click');\n  }, 1500);\n}\n// theme based code \n      var $wsInit = 0;\n      var $wsInterval = setInterval(function () {\n        var $wsCartCnt = $('.evm_wiser_count').text()[0];\n        $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n        if ($('body .quick-cart__wrapper').hasClass('active') && $wsDrawerDivCnt == 8 && $wsInit == 0) {                \n         $wsInit = 1;\n          window.WISER_INIT('cart', 1);\n          setTimeout(function () {\n            $wsInit = 0;\n          }, 5000);\n        }\n      }, 100);`
  },
  {
    id: '110',
    storeName: 'bj-positive-wear.myshopify.com',
    themeName: 'Impulse',
    date: '24-01-10',
    author: 'P',
    code: `function wiseraddedtocart(){\n    document.dispatchEvent(new CustomEvent('ajaxProduct:added', {\n          detail: {\n            product: '',\n            addToCartBtn: ''\n          }\n        }));  \n  }\nwiseraddtocart();\nfunction wiseraddtocart() {\n  $('.quick-cart__container').load(location.href + ' .quick-cart__container>*', '');\n  setTimeout(function() {\n    $('body header a .icon-button.icon-button-header-shopping-cart').trigger('click');\n  }, 1500);\n}`
  },
  {
    id: '111',
    storeName: 'louisstitch.myshopify.com',
    themeName: 'Gecko',
    date: '23-12-28',
    author: 'P',
    code: `function wiseraddedtocart() {\n  window.T4SThemeSP.Cart.getToFetch();\n  $('.t4s-site-nav__cart svg').trigger('click');\n}\n\n\n// Theme baesd Code for cart drawer\nvar $wsInit = 0;\nvar $wsCartCntOld = 0;\nvar $wsInterval = setInterval(function () {\n  var $wsCartCnt = $('body .t4s-site-nav__cart a  span.t4s-count-box').text();\n  if (\n    $('body #t4s-mini_cart').attr('aria-hidden') != 'true' &&\n    $wsCartCnt != $wsCartCntOld &&\n    $wsInit == 0\n  ) {\n    $wsCartCntOld = $wsCartCnt;\n    $wsInit = 1;\n    window.WISER_INIT('cart', 1);\n    setTimeout(function () {\n      $wsInit = 0;\n    }, 3000);\n  }\n}, 500);`
  },
  {
    id: '112',
    storeName: 'shanelzstore.myshopify.com',
    themeName: 'Kalles',
    date: '23-12-15',
    author: 'P',
    code: `function wiseraddedtocart(){\n         window.T4SThemeSP.Cart.getToFetch();\n  $('.t4s-site-nav__cart svg').trigger('click');\n     }`
  },
  {
    id: '113',
    storeName: 'divebombindustries.myshopify.com',
    themeName: 'Impulse',
    date: '23-12-05',
    author: 'Yash',
    code: `function wiseraddedtocart(){\n    document.dispatchEvent(new CustomEvent('ajaxProduct:added', {\n          detail: {\n            product: '',\n            addToCartBtn: ''\n          }\n        }));  \n  }\n\n\n\n\n  // Theme Based code                                                         .    \n\n\n  var $wsInit = 0;\n  var $wsCartCntOld = 0;\n  var $wsInterval = setInterval(function() {\n    $wsCartCnt    = $('.cart__items').attr('data-count');\n    if ($('body #CartDrawer').hasClass('drawer--is-open') && $wsCartCnt != $wsCartCntOld && $wsInit == 0) {\n      $wsCartCntOld = $wsCartCnt;\n      $wsInit = 1;\n      window.WISER_INIT('cart',1);\n      setTimeout(function () {\n        $wsInit = 0;\n      }, 3000);\n    }\n  }, 500);`
  },
  {
    id: '114',
    storeName: 'Gracemygrace.myshopify.com',
    themeName: 'Fashionopolism',
    date: '23-12-05',
    author: 'Yash',
    code: `function wiseraddedtocart(){\n$.getJSON('/cart.js', function(cart) {\n        window.wetheme.toggleRightDrawer('cart', true, { cart: cart });      \n      });\n    }\n // theme based code \n\n\n  $( document ).ready(function() {\n    setInterval(function() {\n      var $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n      var aa = $('.cart-item-count-header').text();\n      if ( $('.right-drawer-vue').find('div').length > 1 &&  $wsDrawerDivCnt == 0) {\n        var parentElement = $('#CartContainer form .ajaxcart__inner');\n        var lastChild = parentElement.children().last();\n        var newElement = $(\`<div class='evm-drawer-main' data-scrollable><div class='evm-drawer-related-product'></div><div class='evm-drawer-related-viewed-browsing'></div><div class='evm-drawer-recommended-products'></div><div class='evm-drawer-recently-viewed'></div><div class='evm-drawer-arrivals-product'></div><div class='evm-drawer-featured-product'></div><div class='evm-drawer-popular-products'></div><div class='evm-drawer-trending-products'></div></div>\`);\n\n\n	if(parentElement.lenght > 0) { \n        newElement.insertBefore(lastChild);\n        window.WISER_INIT('cart',1);\n}\n      }\n    }, 1000);\n  });`
  },
  {
    id: '115',
    storeName: 'secret-label.myshopify.com',
    themeName: 'Fashionopolism',
    date: '23-12-01',
    author: 'Neeraj',
    code: `function wiseraddtocart() {\n    $('.js-mini-cart-trigger').trigger('click');\n  }\n  // Theme Based code                                                       .\n  let $wsInit = 0;\n  let $wsCartCntOld = 0;\n  let $wsInterval = setInterval(function() {\n    let $wsCartCnt = parseInt($('.js-cart-count.vib-center').text());\n    if ($wsCartCnt != $wsCartCntOld && $wsInit == 0) {\n      $wsInit = 1;\n      $wsCartCntOld = $wsCartCnt;\n      window.WISER_INIT('cart',1);\n      setTimeout(function () {\n        $wsInit = 0;\n      }, 3000);\n    }\n  }, 500);`
  },
  {
    id: '116',
    storeName: 'pilla-sport-2.myshopify.com',
    themeName: 'Impulse',
    date: '23-11-16',
    author: 'P',
    code: `function wiseraddedtocart(){  \n  new theme.CartDrawer();\n   $('.js-drawer-open-cart span').trigger('click'); \n\n\n}`
  },
  {
    id: '117',
    storeName: 'ripplecollection.myshopify.com',
    themeName: 'Flex',
    date: '23-11-09',
    author: 'P',
    code: `function wiseraddedtocart(){  \n  window.PXUTheme.jsAjaxCart.showDrawer();\n  window.PXUTheme.jsAjaxCart.updateView();\n}`
  },
  {
    id: '118',
    storeName: 'hilife-vitamins.myshopify.com',
    themeName: 'Supply',
    date: '23-11-08',
    author: 'P',
    code: `function wiseraddedtocart(){\n    window.ajaxifyShopify.showUpdatedCartModal()\n   }    \n\n\n$( document ).ready(function() {\n  setInterval( function() {    \n    var $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n    if ( $('#ajaxifyModal').hasClass('is-visible') && $('#ajaxifyCart form') && $wsDrawerDivCnt == 0 ) {\n      var parentElement = $('#ajaxifyCart form');\n      var lastChild = parentElement.children().last();\n      var newElement = $(\`<div class='evm-drawer-main' data-scrollable>\n                        <div class='evm-drawer-related-product'></div>\n                        <div class='evm-drawer-related-viewed-browsing'></div>\n                        <div class='evm-drawer-recommended-products'></div>\n                        <div class='evm-drawer-recently-viewed'></div>\n                        <div class='evm-drawer-arrivals-product'></div>\n                        <div class='evm-drawer-featured-product'></div>\n                        <div class='evm-drawer-popular-products'></div>\n                        <div class='evm-drawer-trending-products'></div>\n                        </div>\`);\n      if(parentElement.length > 0 ) {\n        newElement.insertBefore(lastChild);\n      window.WISER_INIT('cart',1);\n      }    \n     }                  \n   }, 1000);\n});`
  },
  {
    id: '119',
    storeName: 'brandscollective.myshopify.com',
    themeName: 'Minimog - OS 2.0',
    date: '23-11-03',
    author: 'P',
    code: `function wiseraddedtocart(){\n    const mCartDrawerElement = document.querySelector('m-cart-drawer');\n    mCartDrawerElement.open();\n    mCartDrawerElement.onCartDrawerUpdate();    \n}`
  },
  {
    id: '120',
    storeName: 'finn-wien.myshopify.com',
    themeName: 'Venue',
    date: '23-11-01',
    author: 'P',
    code: `function wiseraddedtocart(){  \n    ajaxCart.load();\n}`
  },
  {
    id: '121',
    storeName: 'sime-garden.myshopify.com',
    themeName: 'Local',
    date: '23-11-01',
    author: 'P',
    code: `function wiseraddedtocart() {\n    window.refreshCart()\n}`
  },
  {
    id: '122',
    storeName: 'nehumall.myshopify.com',
    themeName: 'Expanse',
    date: '23-11-01',
    author: 'P',
    code: `function wiseraddedtocart() {\n    document.dispatchEvent(new CustomEvent('ajaxProduct:added', {\n      detail: { product: '', addToCartBtn: '' }\n    }));\n  }`
  },
  {
    id: '123',
    storeName: 'freakins.myshopify.com',
    themeName: 'Focal',
    date: '23-10-24',
    author: 'Evm-old',
    code: `function  wiseraddedtocart(){\n  document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {\n    bubbles: true,\n    detail: { openMiniCart: window.themeVariables.settings.cartType === 'drawer' }\n  }));\n  $.getJSON('/cart.js', function(cart) {\n  var ws_item_count = cart.item_count\n  $('.header__cart-count').text(ws_item_count);\n  });\n}\n  // Theme Based code                                                       .\nvar $wsInit = 0;\nvar $wsInterval = setInterval(function() {\n  var $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n  var wsChkAttr = $('cart-drawer').attr('open');\n  if (typeof wsChkAttr !== 'undefined' && wsChkAttr !== false && $wsDrawerDivCnt == 8 && $wsInit == 0) {\n    $wsInit = 1;\n    window.WISER_INIT('cart',1);\n    setTimeout(function () {\n      $wsInit = 0;\n    }, 3000);\n  }\n}, 1000);`
  },
  {
    id: '124',
    storeName: 'luxoboutique7.myshopify.com',
    themeName: 'Streamline',
    date: '23-10-23',
    author: 'Evm-old',
    code: `wiseraddedtocart();\n   function wiseraddedtocart(){\n     document.dispatchEvent(new CustomEvent('ajaxProduct:added'));\n   }\n  // Theme Based code                                                       .\n  var $wsInit = 0;\n  var $wsInterval = setInterval(function() {\n    $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n    if ($('body #CartDrawer').hasClass('drawer--is-open') && $wsDrawerDivCnt == 8 && $wsInit == 0) {\n      $wsInit = 1;\n      window.WISER_INIT('cart',1);\n      setTimeout(function () {\n        $wsInit = 0;\n      }, 3000);\n    }\n  }, 1000);`
  },
  {
    id: '125',
    storeName: 'justhorseriders.myshopify.com',
    themeName: 'Symmetry',
    date: '23-10-19',
    author: 'Yash',
    code: `function wiseraddedtocart(){\n  $('.cart-drawer').load(location.href + ' .cart-drawer>*', '');\n  $.getJSON('/cart.js', function(cart) {\n     var ws_item_count = cart.item_count\n     $('.cart-link__count').remove();\n     $('.cart-link__icon').append(\`<span class='cart-link__count'>\${ws_item_count}</span> \`)\n     \n  });\n}`
  },
  {
    id: '126',
    storeName: 'Hello-charlie-2.myshopify.com',
    themeName: 'Venue',
    date: '23-10-10',
    author: 'Evm-old',
    code: `function wiseraddedtocart(){      \n    ajaxCart.load();\n    $('.cart-count-bubble').trigger('click');\n  }`
  },
  {
    id: '127',
    storeName: 'victoria-beckham-staging.myshopify.com',
    themeName: 'Dawn',
    date: '23-10-09',
    author: 'Evm-old',
    code: `wiseraddedtocart();\n  function wiseraddedtocart() {\n    $('#shopify-section-foster-mini-cart-items').load(location.href + ' #shopify-section-fostr-mini-cart-items>*', '');\n    $('#shopify-section-fostr-mini-cart-footer').load(location.href + ' #shopify-section-fostr-mini-cart-footer>*', '');\n    $('body #cart-icon-bubble .cart-count-bubble').trigger('click');\n  }\n  // Theme Based code                                                       .\n  var $wsInterval = setInterval(function() {\n    if ($('body #mini-cart').hasClass('is-active')) {\n      $('#mini-cart').removeAttr('hidden');\n    }\n  }, 500);`
  },
  {
    id: '128',
    storeName: 'victoria-beckham-us.myshopify.com',
    themeName: 'Dawn',
    date: '23-11-16',
    author: 'Evm-old',
    code: `wiseraddedtocart();\n  function wiseraddedtocart() {\n    const event = new CustomEvent('wiser:addedToCart');\n    window.dispatchEvent(event);\n  }`
  },
  {
    id: '129',
    storeName: '524f99.myshopify.com',
    themeName: 'Streamline',
    date: '23-10-06',
    author: 'Evm-old',
    code: `wiseraddedtocart();\n  function wiseraddedtocart() {\n    $('#CartDrawer').load(location.href + ' #CartDrawer>*', '');\n    $('body .site-nav__link--cart').trigger('click');\n  }`
  },
  {
    id: '130',
    storeName: 'ju-poppin.myshopify.com',
    themeName: 'Venue',
    date: '23-10-06',
    author: 'Evm-old',
    code: `wiseraddedtocart();\n  function wiseraddedtocart() {\n    $('#CartDrawer-Body').load(location.href + ' #CartDrawer-Body>*', '');\n    $('body #cart-counter .cart-count-badge').trigger('click');\n  }\n  // Theme Based code                                                       .\n  var $wsInit = 0;\n   var $wsInterval = setInterval(function() {\n    $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n    if ($('body cart-drawer').hasClass('is-visible') && $wsDrawerDivCnt == 8 && $wsInit == 0) {\n      $wsInit = 1;\n      window.WISER_INIT('cart',1);\n      setTimeout(function () {\n        $wsInit = 0;\n      }, 3000);\n    }\n  }, 1000);`
  },
  {
    id: '131',
    storeName: 'bondi-boost-usa.myshopify.com',
    themeName: 'Impulse',
    date: '23-09-22',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n    new theme.CartDrawer();\n    $('.js-drawer-open-cart').trigger('click');\n  }\n  // Theme Based code                                                       .\n  var $wsInit = 0;\n  var $wsInterval = setInterval(function() {\n    $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n    if ($('body .cart-link__bubble').hasClass('cart-link__bubble--visible') && $wsDrawerDivCnt == 8 && $wsInit == 0) {\n      $wsInit = 1;\n      window.WISER_INIT('cart',1);\n      setTimeout(function () {\n        $wsInit = 0;\n      }, 3000);\n    }\n  }, 1000);`
  },
  {
    id: '132',
    storeName: 'beeglee-in.myshopify.com',
    themeName: 'Prestige',
    date: '23-07-12',
    author: 'Evm-old',
    code: `var ws_cnt = 0;\n  function wiseraddtocart(e) {\n    document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {bubbles: true}));\n    if ($(e.target).closest('.evm-drawer-main').length != 0) return false;\n    if(ws_cnt == 0) $('body a.relative .sr-only').trigger('click');\n    ws_cnt++;\n    setTimeout(function () {\n      ws_cnt = 0;\n    }, 3000);\n  }\t\n  var $wsInterval = setInterval(function() {\n    $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;\n    if ($('body .header__cart-dot').hasClass('is-visible') && $wsDrawerDivCnt == 8) {\n      window.WISER_INIT('cart',1);\n    }\n  }, 1000);`
  },
  {
    id: '133',
    storeName: 'globalhealing.myshopify.com',
    themeName: 'Dawn',
    date: '23-07-12',
    author: 'Evm-old',
    code: `function wiseraddtocart() {\n    setTimeout(function () {\n      $.getJSON('/cart.js', function(cart) {\n        var ws_item_count = cart.item_count\n        $('.cart-count-bubble').remove();\n        $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');\n        $('body .header__icons #cart-icon-bubble')[0].click();\n      });\n    }, 1000);\n\n\n    $(document).on('click', '#CartDrawer-Overlay', function(e) {\n      e.preventDefault();\n      $('#CartDrawer').parent().removeClass('active');\n    });  \n    $('.drawer').load(location.href + ' .drawer>*', '');\n    setTimeout(function() {\n      $('.drawer').addClass('active');\n      $('.drawer').removeClass('is-empty');\n    },1000);\n  }`
  },
  {
    id: '134',
    storeName: 'elevatestyles.myshopify.com',
    themeName: 'Expanse',
    date: '23-06-13',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n    document.dispatchEvent(new CustomEvent('ajaxProduct:added', {\n      detail: { product: '', addToCartBtn: '' }\n    }));\n  }`
  },
  {
    id: '135',
    storeName: 'avimeeherbal.myshopify.com',
    themeName: 'Refresh',
    date: '23-06-06',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n    $('#CartDrawer').load(location.href + ' #CartDrawer>*', '');\n    setTimeout(function () {\n      $('#CartDrawer').parent().removeClass('is-empty');\n      $.getJSON('/cart.js', function (cart) {\n        var ws_item_count = cart.item_count;\n        $('.cart-count-bubble').remove();\n        $('#cart-icon-bubble').append(\n          '<div class='cart-count-bubble'><span aria-hidden='true'>' +\n            ws_item_count +\n            '</span><span class='visually-hidden'>' +\n            ws_item_count +\n            ' item</span></div>'\n        );\n        $('body .header__icons #cart-icon-bubble')[0].click();\n      });\n    }, 1000);\n  }\n  $(document).click(function (e) {\n    if ($(e.target).closest('.drawer__inner').length != 0) return false;\n    $('.drawer__close').trigger('click');\n  });`
  },
  {
    id: '136',
    storeName: 'molton-brown-ksa.myshopify.com',
    themeName: 'Advanced Gulp Theme',
    date: '23-05-29',
    author: 'Evm-old',
    code: `wiseraddedtocart();\n  function wiseraddedtocart() {\n    $('.mini-cart-list').load(location.href+' .mini-cart-list>*','');\n    setTimeout(function () {\n      $.getJSON('/cart.js', function(cart) {\n        var ws_item_count = cart.item_count\n        $('.mcart-count').text(ws_item_count);\n        // $('.mcart-count').trigger('click');\n      });\n    }, 500);\n  }`
  },
  {
    id: '137',
    storeName: 'us-d2csympli.myshopify.com',
    themeName: 'Prestige',
    date: '23-05-23',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {    \n    document.dispatchEvent(new CustomEvent('product:added', {\n        bubbles: true,\n      detail: {}\n    }));\n  }\n  // Theme Based code                                                       .\n  <script>\n    var cart_count_old = 0;\n    $('.Header__Icon').on('click', function() {\n      var ws_aria_hidden = $('#sidebar-cart').attr('aria-hidden');\n      if(ws_aria_hidden == 'true') {\n          jQuery.getJSON('/cart.js', function(ws_cart) {\n          var ws_cnt = ws_cart.item_count;\n          if(cart_count_old != ws_cnt) {\n            cart_count_old = ws_cnt;\n              window.WISER_INIT('cart',1);\n          }\n        });\n      }\n    })\n  </script>`
  },
  {
    id: '138',
    storeName: 'organic-basics-store-us.myshopify.com',
    themeName: 'Dawn',
    date: '23-04-28',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n    $('#ws_CartDrawer').load(location.href+' #ws_CartDrawer>*','');\n    setTimeout(function () {\n      $.getJSON('/cart.js', function(cart) {\n        var ws_item_count = cart.item_count\n        $('.cart-count-bubble').remove();\n        $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');\n        $('body .header__icons #cart-icon-bubble')[0].click();\n      });\n    }, 1000);\n  }\n\n\n  // Theme Based code                                                       .\n  $(document).click(function(e){\n    if($(e.target).closest('.drawer__inner').length != 0) return false;\n      $('.drawer__close').trigger('click');\n  });\n   \n  var old_cart_count = 0;\n  setInterval(function () {\n    var cart_count = $('.cart-count-bubble span:first-child').text();\n    if ($('.drawer').hasClass('active') && cart_count != old_cart_count) {\n      old_cart_count = cart_count;\n    }\n    if($('body').hasClass('overflow-hidden') && cart_count != old_cart_count) {\n      $('.ws_CartDrawer .drawer').addClass('active');\n    }\n  }, 100);`
  },
  {
    id: '139',
    storeName: 'goldelucks-bakeshop.myshopify.com',
    themeName: 'Tarun Box Sleeve Add On',
    date: '23-04-13',
    author: 'Evm-old',
    code: `wiseraddedtocart();\n  function wiseraddedtocart() {  \n    setTimeout(function(){\n      $.ajax({\n        url: '/cart/update.js',\n        method: 'post',\n        dataType: 'json',\n        data: {\n          updates: {}\n        }\n      }).Evm-old(function(cart) {\n      //  searchPopup();\n     \n        // Shopify.addItem('6848867958846', 1);\n        console.log(cart);\n        //addToCartHandler.initItemAddToCartButton();\n        Shopify.onCartUpdate(cart);\n       \n      });  \n    }, 1000);\n  }`
  },
  {
    id: '140',
    storeName: 'renaissance-global-limited.myshopify.com',
    themeName: 'Debut',
    date: '23-04-05',
    author: 'Evm-old',
    code: `wiseraddedtocart();\n  function wiseraddedtocart() {\n      $('.site-header__cart').click();\n  }`
  },
  {
    id: '141',
    storeName: 'mooboutiqueyorkshire.myshopify.com',
    themeName: 'Impulse',
    date: '23-03-30',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n    new theme.CartDrawer();\n    $('.js-drawer-open-cart').trigger('click');\n}`
  },
  {
    id: '142',
    storeName: 'rex-specs-k9.myshopify.com',
    themeName: 'Custom',
    date: '23-03-07',
    author: 'Evm-old',
    code: `function wiseraddtocart() {\n    jQuery.getJSON('/cart.js', function(cart) {\n      var ws_items    = cart.items;\n      window.vue.updateCart(ws_items[0].variant_id, ws_items[0].quantity);\n      $('.drawer-cart-toggle').trigger('click')\n    });\n  }\n// Theme,e base codews_item_count\n  var old_cart_count = 0;\n  setInterval(function () {\n    var cart_count = $('.drawer-cart-toggle .font-primary').text();\n    if (cart_count != old_cart_count) {\n      old_cart_count = cart_count;\n      window.WISER_INIT('cart',1);\n    }\n}, 100);`
  },
  {
    id: '143',
    storeName: 'bad-no.myshopify.com',
    themeName: 'Basel',
    date: '23-02-21',
    author: 'Evm-old',
    code: `function wiseraddedtocart()   { \n    setTimeout(function(){\n       $.ajax({\n        url: '/cart/update.js',\n        method: 'post',\n        dataType: 'json',\n        data: {\n          updates: {}\n        }}).Evm-old(function(cart) {\n        $.get('/cart?view=json', function(data) {\n          $('.widget_shopping_cart_content').html(data);\n        });\n       $('.basel-ajax-shop-on').addClass('basel-cart-opened');\n      });  \n    }, 100);\n  }`
  },
  {
    id: '144',
    storeName: 'bad-no.myshopify.com',
    themeName: 'Dawn',
    date: '23-02-17',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n      $('#ws_CartDrawer').load(location.href + ' #ws_CartDrawer');\n      setTimeout(function() {\n        $('.drawer').addClass('active');\n        $('.drawer').removeClass('is-empty');\n      },1000);\n }\n\n// Theme based code\nvar old_cart_count = 0;\n    var ws_flag = 0; \n    setTimeout(function(){\n      setInterval(function () {\n        var cart_count = $('.drawer__items-wrapper div').length;\n        if (cart_count != old_cart_count) {\n          old_cart_count = cart_count;\n          ws_flag = 1;\n          window.WISER_INIT('cart',1); \n        }\n      }, 100);\n      ws_flag = 0;\n    }, 3000);\n    $(document).on('click','body #CartDrawer .drawer__close', function(){\n      if($('.drawer').hasClass('active')) {\n         $('.drawer').removeClass('active');\n      }\n    });`
  },
  {
    id: '145',
    storeName: 'julian-charles-home.myshopify.com',
    themeName: 'Dawn',
    date: '23-01-11',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n    $('#ws_CartDrawer').load(location.href + ' #ws_CartDrawer');\n    $.getJSON('/cart.js', function(cart){\n      var ws_item_count = cart.item_count\n      $('.cart-count-bubble').remove();\n      $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');\n    });\n    setTimeout(function () {\n      $('body').addClass('overflow-hidden');\n    }, 2000);\n  }\n// Theme based code \n\n/* wiser js code */\n    var old_cart_count = 0;\n    setTimeout(function () {\n      setInterval(function () {\n        var cart_count = $('.cart-count-bubble span:first-child').text();\n        if ($('.drawer').hasClass('active') && cart_count != old_cart_count) {\n          old_cart_count = cart_count;\n          var ws_cnt = 0;\n          $('.evm-drawer-main div').each(function() {\n            if($(this).html()=='') {\n              ws_cnt++;\n            }\n          });\n          if(ws_cnt <= 8) {\n            window.WISER_INIT('cart',1);\n          }\n        }\n        if($('body').hasClass('overflow-hidden') && cart_count != old_cart_count) {\n          $('.ws_CartDrawer .drawer').addClass('active');\n        }\n      }, 100);\n    }, 1000);\n    /* end wiser js code */`
  },
  {
    id: '146',
    storeName: 'herb-pharm-llc.myshopify.com',
    themeName: 'Dawn',
    date: '23-01-11',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n  $('#main-cart-items').load(location.href + ' #main-cart-items');\n  setTimeout(function() {\n      $('#cart-icon-bubble').trigger( 'click' );\n  }, 3000);\n}\n// Theme based code\nvar old_cart_count = 0;\nvar ws_flag = 0; \nsetInterval(function () {\n  var cart_count = $('.cart-count-bubble span:first').text();\n  if ($('#cart-notification').hasClass('active') && cart_count != old_cart_count && ws_flag == 0) {\n    old_cart_count = cart_count;\n    ws_flag = 1;\n    window.WISER_INIT('cart',1); \n  }\n}, 100);`
  },
  {
    id: '147',
    storeName: 'axyzcnc.myshopify.com',
    themeName: 'Dawn',
    date: '23-01-06',
    author: 'Evm-old',
    code: `wiseraddedtocart();\nfunction wiseraddedtocart() {\n  jQuery.getJSON('/cart.js', function(cart) {\n    console.log(cart.items);\n    var ws_last_item = cart.items[0];\n    console.log(ws_last_item);\n    var ws_html = '<img class='cart-notification-product__image' src=''+ws_last_item.image+'' alt='' width='70' height='94' loading='lazy'>';\n    ws_html += '<div class='cart-notification-product__info'>';\n    ws_html += '<h3 class='cart-notification-product__name h4'>'+ws_last_item.product_title+'</h3>';\n    ws_html += '<dl><div class='cart-notification-product__option h4'>';\n    ws_html += '<dt>Size: </dt>';\n    ws_html += '<dd>'+ws_last_item.variant_title+'</dd>';\n    ws_html += '</div></dl></div>';\n    $('#cart-notification-button').text('View my cart ('+cart.item_count+')');\n    $('#cart-notification-product').append(ws_html);\n    $('#cart-notification').addClass('active');\n  });\n}`
  },
  {
    id: '148',
    storeName: 'axyzcnc.myshopify.com',
    themeName: 'Woodmart',
    date: '23-01-03',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n    $.get('/cart?view=json', function(e) {\n      $('.widget_shopping_cart_content').html(e);\n    }),\n    $.getJSON('/cart.js', function(e) {\n      $('.woodmart-cart-number').html(e.item_count + ' <span>'+woodmart_settings.cart_data.totalNumb+'</span>');\n      $('.woodmart-cart-subtotal >span').html(Shopify.formatMoney(e.total_price, money_format));\n    });\n    $('body').addClass('woodmart-cart-opened');\n}`
  },
  {
    id: '149',
    storeName: 'modelaider.myshopify.com',
    themeName: 'Custom',
    date: '22-12-08',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n   Shopify.getCart();\n   $('.shopping-cart-content').addClass('show');\n}`
  },
  {
    id: '150',
    storeName: 'woodland-presets.myshopify.com',
    themeName: 'Motion',
    date: '22-12-06',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n    new theme.CartDrawer();\n    document.querySelector('.js-drawer-open-cart').click();\n}`
  },
  {
    id: '151',
    storeName: 'cura-marketing.myshopify.com',
    themeName: 'Impulse',
    date: '22-11-23',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n    new theme.CartDrawer();\n    $('.js-drawer-open-cart').trigger('click');\n}`
  },
  {
    id: '152',
    storeName: 'petslibro.myshopify.com',
    themeName: 'Motion',
    date: '22-11-23',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n    new theme.CartDrawer();\n    document.querySelector('.js-drawer-open-cart').click();\n}\n\n// Theme based code is below\nvar old_cart_count = 0;\n  setInterval(function () {\n    var cart_count = $('.small--hide .cart-link__bubble').text();\n    if ($('#CartDrawer').hasClass('drawer--is-open') && cart_count != old_cart_count) {\n      old_cart_count = cart_count;\n      window.WISER_INIT('cart',1);\n    }\n  }, 100);`
  },
  {
    id: '153',
    storeName: 'vooki-in.myshopify.com',
    themeName: 'Belle OS 2.0',
    date: '22-11-08',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n  $('#errorDrawer').css('display', 'none');\n  $('.modalOverly').css('display', 'none');\n  setTimeout(function(){\n    CartJS.addItem({\n        'success': function(data, textStatus, jqXHR){\n           setTimeout(function() {\n              $('body').removeClass('loading showOverly');\n              $('.header-cart').trigger('click');\n           },500);\n        },\n    });\n  }, 500);\n}`
  },
  {
    id: '154',
    storeName: 'holsteinshopsliving.myshopify.com',
    themeName: 'Dawn',
    date: '22-10-17',
    author: 'Evm-old',
    code: `function wsRemoveNoti() { $('#cart-notification').removeClass('active');}\n\nwiseraddedtocart();\nfunction wiseraddedtocart() {\n\tsetTimeout(function() {\n          $.ajax({\n            url: '/cart/update.js',\n            method: 'post',\n            dataType: 'json',\n            data: {\n              updates: {}\n            }\n          }).Evm-old(function(cart) {\n            var ws_title = cart.items[0].product_title;\n            var ws_image = cart.items[0].image;\n            var ws_cnt = cart.item_count;\n            var ws_cnt_txt = 'Meinen Warenkorb (0) anzeigen';\n            var updated_txt = ws_cnt_txt.replace(/\d+/, ws_cnt);\n            var ws_cart_noti = '<div class='cart-notification__header'> <h2 class='cart-notification__heading caption-large text-body'><svg class='icon icon-checkmark color-foreground-accent-1' aria-hidden='true' focusable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 9' fill='none'> <path fill-rule='evenodd' clip-rule='evenodd' d='M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z' fill='currentColor'></path> </svg><font style='vertical-align: inherit;'><font style='vertical-align: inherit;'>'+ws_title+'</font></font></h2> <button type='button' onclick='wsRemoveNoti()' class='cart-notification__close modal__close-button link link--text focus-inset' aria-label='Conclude'> <svg class='icon icon-close' aria-hidden='true' focusable='false'><use href='#icon-close'></use></svg> </button> </div> <div id='cart-notification-product' class='cart-notification-product'><div class='cart-notification-product__image global-media-settings'> <img src=''+ws_image+'' alt=''+ws_title+''  width='70' height='70' loading='lazy'> </div><div> <h3 class='cart-notification-product__name h4'><font style='vertical-align: inherit;'><font style='vertical-align: inherit;'>'+ws_title+'</font></font></h3> <dl></dl></div> </div> <div class='cart-notification__links'> <a href='/cart' id='cart-notification-button' class='button button--secondary button--full-width'><font style='vertical-align: inherit;'><font style='vertical-align: inherit;'>'+updated_txt+'</font></font></a> <form action='/cart' method='post' id='cart-notification-form'> <button class='button button--primary button--full-width' name='checkout'><font style='vertical-align: inherit;'><font style='vertical-align: inherit;'>Sicher zur Kasse</font></font></button> </form> <button type='button' onclick='wsRemoveNoti()' class='link button-label'><font style='vertical-align: inherit;'><font style='vertical-align: inherit;'>Weiter shoppen</font></font></button> </div>';\n            $('#cart-notification div').remove();\n            $('#cart-notification').append(ws_cart_noti);\n            $('#cart-notification').addClass('active');\n          });\n        }, 500);\n}, 100);`
  },
  {
    id: '155',
    storeName: 'divinikey.myshopify.com',
    themeName: 'Canopy',
    date: '22-10-07',
    author: 'Evm-old',
    code: `wiseraddedtocart();\nfunction wiseraddedtocart() {\n      setTimeout(function() {\n        theme.updateCartSummaries(true, true);\n      }, 500);\n}\nvar cart_count_old = 0;\n    setInterval(function () {\n      var inner_count = $('.inner-count').text();\n      if (inner_count != cart_count_old) {\n        cart_count_old = inner_count;\n        window.WISER_INIT('cart',1);\n      }\n}, 100);`
  },
  {
    id: '156',
    storeName: 'elgeniox.myshopify.com',
    themeName: 'Molla',
    date: '22-10-07',
    author: 'Evm-old',
    code: `wiseraddedtocart();\nfunction wiseraddedtocart() {\n    setTimeout(function() {\n      Shopify.KT_getCart();\n    }, 1000);\n  }`
  },
  {
    id: '157',
    storeName: 'kiwabi-usa.myshopify.com',
    themeName: 'Pipeline',
    date: '22-10-05',
    author: 'Evm-old',
    code: `wiseraddedtocart();\nfunction wiseraddedtocart() {\n    setTimeout(function() {\n        document.documentElement.dispatchEvent(new CustomEvent('theme:cart:init', { bubbles: true}));\n        document.dispatchEvent(new CustomEvent('theme:cart:reload', {bubbles: true}));\n        var ws_cart_count_old = 0;\n    }, 1500);\n    setTimeout(function() {\n        $('body .header__mobile__right .header__mobile__button .header__cart__status').trigger('click');\n    }, 2500);\n}`
  },
  {
    id: '158',
    storeName: 'hoptea.myshopify.com',
    themeName: 'Venue',
    date: '22-07-14',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n      ajaxCart.load();\n      ajaxCart.open();\n    }\n// Theme based code\nsetInterval(function () {\n          if ($('#ajax-cart-container').hasClass('active')) {\n            $('.ws_ajaxcart_container').addClass('active');\n            $('body').addClass('no-scroll');\n          } else {\n            $('.ws_ajaxcart_container').removeClass('active');\n          }\n        }, 10);`
  },
  {
    id: '159',
    storeName: 'bsc-women.myshopify.com',
    themeName: 'Kalles',
    date: '22-06-16',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n      var pid = $('.evm-related-product .evm-ws__cart-submit').attr('data-pid');\n      setTimeout(function(){\n        document.dispatchEvent(new CustomEvent('cart:refresh'));\n          var mask = $('.mask-overlay'),\n              classActive = 'act_current',\n              act_opened = 'act_opened',\n              html = $('html'),\n              ModTouchevents = Modernizr.touchevents;\n          html.addClass('hside_opened');\n          $('body').addClass('pside_opened');\n          $('#nt_cart_canvas').addClass(act_opened);\n          mask.addClass('mask_opened');\n      }, 1000);\n}`
  },
  {
    id: '160',
    storeName: 'golftini.myshopify.com',
    themeName: 'Mr Parker',
    date: '22-06-13',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n   $('.js-mini-cart-trigger.js-slideout-open').trigger('click');\n}`
  },
  {
    id: '161',
    storeName: 'bailey44-usd.myshopify.com',
    themeName: 'Prestige',
    date: '23-01-23',
    author: 'Evm-old',
    code: `// Theme based code \n var old_cart_count = 0;\n  setInterval(function () {\n    var ws_cnt_div = $('.evm-drawer-related-viewed-browsing div').children().length;\n    console.log(ws_cnt_div);\n    var cart_count = $('.Header__CartCount').text();\n    if(cart_count != old_cart_count && cart_count != '' && cart_count < '2' && ws_cnt_div == 0) {\n      old_cart_count = cart_count;\n      window.WISER_INIT('cart',1); \n    }\n  }, 100);`
  },
  {
    id: '162',
    storeName: 'bailey44-usd.myshopify.com',
    themeName: 'Belle OS 2.0',
    date: '22-06-07',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n      $('#errorDrawer').css('display', 'none');\n      $('.modalOverly').css('display', 'none');\n      setTimeout(function(){\n        $('.header-cart').trigger('click');\n      },500);\n    }`
  },
  {
    id: '163',
    storeName: 'bailey44-usd.myshopify.com',
    themeName: 'Prestige',
    date: '22-06-03',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n    document.dispatchEvent(new CustomEvent('product:added', {\n      bubbles: true,\n      detail: {\n      }\n    }));\n  }`
  },
  {
    id: '164',
    storeName: 'Yourmood.myshopify.com',
    themeName: 'Expanse',
    date: '23-06-04',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n  document.dispatchEvent(new CustomEvent('ajaxProduct:added', {\n    detail: {\n      product: '', addToCartBtn: ''\n    }\n  }));\n}`
  },
  {
    id: '165',
    storeName: 'rmid.myshopify.com',
    themeName: 'Broadcast',
    date: '24-04-04',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n    const wsCartItmObj = document.querySelector('cart-items');\n    wsCartItmObj.getCart()\n    document.dispatchEvent(new CustomEvent('theme:cart:toggle', {bubbles: true}));\n  }`
  },
  {
    id: '166',
    storeName: 'rmid.myshopify.com',
    themeName: 'Broadcast',
    date: '23-12-05',
    author: 'Evm-old',
    code: `wiseraddedtocart();\nfunction wiseraddedtocart() {\n    window.cart.getCart();\n    if(!$('#cart-dropdown').hasClass('is-open')) {\n       $('#ws_navlink_cart_drawer')[0].click();\n    }\n  }\n\n// Theme based code [5-12-23]\n  var ws_flag = 0;\n  var cart_count_old = 0;\n  setInterval(function () {\n    var cart_count = $('.header__cart__status').attr('data-cart-count');\n    if (cart_count_old != cart_count && ws_flag == 0) {\n      ws_flag = 1;\n      cart_count_old = cart_count;\n      window.WISER_INIT('cart',1);\n      setTimeout(function() {\n        ws_flag= 0;\n      }, 3000);\n    }\n  }, 100);`
  },
  {
    id: '167',
    storeName: 'rmid.myshopify.com',
    themeName: 'Broadcast',
    date: '23-01-17',
    author: 'Evm-old',
    code: `var ws_clk = 0;\n  function wiseraddedtocart() {\n    window.cart.getCart();\n    if(!$('#cart-dropdown').hasClass('is-open')) {\n       $('#ws_navlink_cart_drawer')[0].click(); // add this id in cart icon in header file \n    }\n  }`
  },
  {
    id: '168',
    storeName: 'rmid.myshopify.com',
    themeName: 'Broadcast',
    date: '22-05-30',
    author: 'Evm-old',
    code: `var ws_clk = 0;\nfunction wiseraddedtocart() {\n  setTimeout(function() {\n    if(ws_clk == 0) {\n      ws_clk = 1;\n      $('#ws_navlink_cart_drawer')[0].click();\n    }\n    setTimeout(function() {\n      ws_clk = 0;\n    }, 3000);\n  }, 2000);\n}\n// Change some code of theme.js file\n// Comment if condition\n//       if (!this.cartDropdownIsBuilded) {\n        this.getCart();\n//       }`
  },
  {
    id: '169',
    storeName: 'rmid.myshopify.com',
    themeName: 'Pipeline',
    date: '22-04-20',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n\tsetTimeout(function() {\n\t\tdocument.documentElement.dispatchEvent(new CustomEvent('theme:cart:init', { bubbles: true}));\n\t\tdocument.dispatchEvent(new CustomEvent('theme:cart:reload', {bubbles: true}));\n\t\t\n\t\t$('.drawer.cart__drawer').removeClass('display-none');\n\t\t$('.drawer.cart__drawer').addClass('drawer--visible');\n\t}, 1500);\n\n}\n\n// Below code is theme based\nvar ws_flag = 0;\nsetInterval(function() {\n\tjQuery.getJSON('/cart.js', function(cart) {\n\t\tlet items = cart.items;\n\t\tfor(var i=0; i < items.length; i++){\n\t\t\tif(ws_flag == 0) {\n\t\t\t\tws_flag = 1;\n\t\t\t\twindow.WISER_INIT('cart',1);\n\t\t\t}\n\t\t}\n\t});\n}, 100);`
  },
  {
    id: '170',
    storeName: 'Lockenkopf.myshopify.com',
    themeName: 'Custom',
    date: '22-01-20',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {   \n    setTimeout(function(){\n      $.ajax({\n        url: '/cart/update.js',\n        method: 'post',\n        dataType: 'json',\n        data: {\n          updates: {}\n        }\n      }).Evm-old(function(cart) {\n        Shopify.getCart(cart);\n        $('#CartCount').text('( '+cart.item_count+' )');\n        $('#page_content .container #CartToggle').click();\n      });  \n    }, 1000);\n  }`
  },
  {
    id: '171',
    storeName: 'Lockenkopf.myshopify.com',
    themeName: 'Prestige',
    date: '22-06-27',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n    document.dispatchEvent(new CustomEvent('product:added', {\n        bubbles: true,\n        detail: {}\n    }));\n}`
  },
  {
    id: '172',
    storeName: 'Bombay-shaving.myshopify.com',
    themeName: 'Kalles',
    date: '22-01-19',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {  \n      var pid = $('.evm-related-product .evm-ws__cart-submit').attr('data-pid');\n      setTimeout(function(){\n        document.dispatchEvent(new CustomEvent('cart:refresh'));\n          var mask = $('.mask-overlay'),\n              classActive = 'act_current',\n              act_opened = 'act_opened',\n              html = $('html'),\n              ModTouchevents = Modernizr.touchevents;\n          html.addClass('hside_opened');\n          $('body').addClass('pside_opened');\n          $('#nt_cart_canvas').addClass(act_opened);\n          mask.addClass('mask_opened');\n      }, 1000);\n    }`
  },
  {
    id: '173',
    storeName: 'Littlebeastnyc.myshopify.com',
    themeName: 'Brooklyn',
    date: '22-01-19',
    author: 'Evm-old',
    code: `function wiseraddedtocart() {\n    $('#CartDrawer .js-drawer-close').click();\n    $('#shopify-section-fodaHeader .main-nav .cart-link').click();\n  }`
  },
  {
    id: '174',
    storeName: 'lastswab.myshopify.com',
    themeName: 'Custom',
    date: '22-01-21',
    author: 'Neeraj',
    code: `// Currency converter Code for -> lastswab.myshopify.com\nfunction wsChangeCurr(wsEleClsId) {\n  var ws_currency           = Shopify.currency;\n  var ws_money_format       = Shopify.money_format;\n  // ... (Full code truncated for brevity, standard currency logic)\n  $(wsEleClsId).each(function( index, val ) {\n    var ws_price        = $( this ).text();\n    ws_price = ws_price.replace(',', '');\n    // ... conversion logic ...\n    $(val).text(ws_money_format.replace(ws_money_format_text, ws_orig_price_f));\n  });\n}`
  },
  {
    id: '175',
    storeName: 'amandaharrington.com',
    themeName: 'Debut',
    date: '22-01-21',
    author: 'Evm-old',
    code: `$( document ).ready(function() {\n     //console.log('m1');\n    setTimeout(function(){\n      //console.log('m2');\n  \t\twiseraddedtocart();\n    }, 1500);\n  });\n  \n  function wiseraddedtocart() { \n   \n    $('.evm-ws__cart-submit').click(function(){\n      \t//console.log('m3');\n        setTimeout(function(){\n\t\t\t $.ajax({\n              url: '/cart/update.js',\n              method: 'post',\n              dataType: 'json',\n              data: {\n                updates: {}\n              }}).Evm-old(function(cart) {\n              const cartEvent = new Event('cartUpdate');\n              window.dispatchEvent(cartEvent);\n              refreshCart(cart);\n              window.setTimeout(function(){ $('.cart-button').click(); }, 500);\n          \t});  \n        }, 100);\n      });\n\t\n  }`
  },
  {
    id: '176',
    storeName: 'Zamage.myshopify.com',
    themeName: 'Custom',
    date: '22-01-21',
    author: 'Evm-old',
    code: `$('body').trigger('added.ajaxProduct', '');`
  },
  {
    id: '177',
    storeName: 'Tradehutdirect.myshopify.com',
    themeName: 'Warehouse',
    date: '22-01-21',
    author: 'Evm-old',
    code: `document.documentElement.dispatchEvent(new CustomEvent('product:added', {\n\t\t\t\t\t\tbubbles: true,\n\t\t\t\t\t\tdetail: {\n\t\t\t\t\t\tvariant:varid,\n\t\t\t\t\t\tquantity: 1\n\t\t\t\t\t\t}\n\t\t\t\t\t}));`
  },
  {
    id: '178',
    storeName: 'Mph-online.myshopify.com',
    themeName: 'Warehouse',
    date: '22-01-21',
    author: 'Evm-old',
    code: `document.documentElement.dispatchEvent(new CustomEvent('product:added', {\n\t\t\t\t\t\tbubbles: true,\n\t\t\t\t\t\tdetail: {\n\t\t\t\t\t\tvariant:null,\n\t\t\t\t\t\tquantity: 1\n\t\t\t\t\t\t}\n\t\t\t\t\t}));`
  },
  {
    id: '179',
    storeName: 'Usporto-proweb.myshopify.com',
    themeName: 'Shella',
    date: '22-01-21',
    author: 'Evm-old',
    screenshot: 'https://www.awesomescreenshot.com/image/57906621?key=e8c7318da7b1be66f2f0628ed488fcb6',
    code: `// After ATC JS :\ndocument.documentElement.dispatchEvent(new CustomEvent('wiser_product_added', {\n\t\t\t\t\t\tbubbles: true,\n\t\t\t\t\t\tdetail: {\n\t\t\t\t\t\tvariant:varid,\n\t\t\t\t\t\tquantity: 1\n\t\t\t\t\t\t}\n\t\t\t\t\t}));\n\n// Cart drawer :\ntheme.Popups.callByName('cart');`
  },
  {
    id: '180',
    author: 'Deepikaaa',
    code: `// After ATC JS :\ndocument.documentElement.dispatchEvent(new CustomEvent('wiser_product_added', {\n\t\t\t\t\t\tbubbles: true,\n\t\t\t\t\t\tdetail: {\n\t\t\t\t\t\tvariant:varid,\n\t\t\t\t\t\tquantity: 1\n\t\t\t\t\t\t}\n\t\t\t\t\t}));\n\n// Cart drawer :\ntheme.Popups.callByName('cart');`,
    date: '2025-12-11',
    screenshot: 'https://cdn.shopify.com/s/files/1/2162/5967/products/1582460006_logo_architechpro.png?v=1590392401',
    storeName: 'deep',
    themeChanges: 'them.liqiid changes here ',
    themeName: 'peep'
  },
  {
    id: 'YjpDKWLItPIXsgWDYZo2',
    date: '2025-12-15',
    storeName: 'b9297f-4.myshopify.com',
    themeName: 'Palo Alto ',
    code: 'function wiseraddedtocart() {  window.cart.getCart()} \n\nwiseraddedtocart()  ',
    author: 'Yash',
    themeChanges: '',
    screenshot: ''
  },
  {
    id: 'sSdfums6QDgeDJAZx0Ls',
    themeName: 'Dawn',
    author: 'Jaya',
    date: '2025-12-10',
    storeName: '9hues-by-abg.myshopify.com',
    code: `async function wiserAddedToCart() {
    const wsres = await fetch('/?section_id=cart-icon-bubble');
    const wsText = await wsres.text();
    const wshtml = document.createElement('div');
    wshtml.innerHTML = wsText;

    const wsnewBox = wshtml.querySelector(
      '#shopify-section-cart-icon-bubble'
    )?.innerHTML;

    const cartIconElement = document.querySelector(
      '#cart-icon-bubble.header__icon--cart'
    );

    cartIconElement.innerHTML = wsnewBox;
  }`
},
{
    id: 'HISZ3Pypyqi0m6BUyCzu',
    date: '2026-02-13',
    storeName: 'gegshop-31b5.myshopify.com',
    themeName: 'Momentum',
    code: `                                        async function wiseraddedtocart() {
  const cart = await (await fetch('/cart.js')).json();
  if (window.wetheme && typeof window.wetheme.updateCartCount === 'function') {
    window.wetheme.updateCartCount(cart);
  }
}

wiseraddedtocart();
                                    `,
    author: 'Deepika',
    themeChanges: '',
    screenshot: ''
  },
  {
    id: 'zHX34CseZni3GpHgLHEu',
    date: '2026-01-07',
    storeName: '2351de-e7.myshopify.com',
    themeName: 'ap-aprin',
    code: `async function wiseraddedtocart() {
    const wsres = await fetch('/?section_id=header-3');
    const wsText = await wsres.text();
    const wshtml = document.createElement('div');
    wshtml.innerHTML = wsText;
    const wsnewBox = wshtml.querySelector('#shopify-section-header-3')?.innerHTML;
    const cartIconElement = document.querySelector('#shopify-section-header-3');
    cartIconElement.innerHTML = wsnewBox;
    const wsrescart = await fetch('/?section_id=mini-cart');
    const wstextcart = await wsrescart.text();
    const wshtmlcart = document.createElement('div');
    wshtmlcart.innerHTML = wstextcart;
    const wsnewBoxCart = wshtmlcart.querySelector('#shopify-section-mini-cart').innerHTML;
    document.querySelector('#shopify-section-mini-cart').innerHTML = wsnewBoxCart;
   const countData = document.querySelector('ap-cartcount')
   countData.click()
  }
wiseraddedtocart()`,
    author: 'Yash',
    themeChanges: 'Old  to  new  migration  old  m  FBt template  1 use  kar raha tha  new m  template  3 diya h  cart drawer intregration  kiya h  phle  nhi tha ',
    screenshot: ''
  },
  {
    id: 'lenGPlB96rKBGKqjbgS0',
    date: '2026-03-05',
    storeName: 'glancia-co.myshopify.com',
    themeName: 'Impact',
    code: `function wiseraddedtocart() {
  document.querySelector('cart-drawer')?.show();
  document.dispatchEvent(new Event('cart:refresh'));
}
wiseraddedtocart();                                    `,
    author: 'jaya',
    themeChanges: '',
    screenshot: ''
  },
  {
    id: 'ZY5iTMGEWvkox6f3I59i',
    date: '2026-03-05',
    storeName: 'hockgiftshop.com',
    themeName: 'December',
    code: `function wiseraddedtocart() {
  theme.miniCart.updateElements();
  theme.miniCart.generateCart();
}
wiseraddedtocart();
`,
    author: 'jaya',
    themeChanges: '',
    screenshot: ''
  },
  {
    id: 'U34hSq5vKORfADMSKRr0',
    date: '2026-03-05',
    storeName: '45b69c-c2.myshopify.com ',
    themeName: 'Shrine PRO',
    code: `async function wiseraddedtocart() {
    const wsres = await fetch('/?section_id=cart-icon-bubble');
    const wsText = await wsres.text();
    const wshtml = document.createElement('div');
    wshtml.innerHTML = wsText;
    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;
    const cartIconElement = document.querySelector('#cart-icon-bubble.header__icon--cart');
    cartIconElement.innerHTML = wsnewBox;
    const wsrescart = await fetch('/?section_id=cart-drawer');
    const wstextcart = await wsrescart.text();
    const wshtmlcart = document.createElement('div');
    wshtmlcart.innerHTML = wstextcart;
    const wsnewBoxCart = wshtmlcart.querySelector('.drawer__inner').innerHTML;
    document.querySelector('.drawer__inner').innerHTML = wsnewBoxCart;
    const wsopener = document.querySelector('cart-drawer');
    wsopener.open();
    document.querySelector('cart-drawer').classList.remove('is-empty');
  }
wiseraddedtocart();
`,
    author: 'jaya',
    themeChanges: '',
    screenshot: ''
  },
  {
    id: 'S64i8IZqEDiTo2DjwIPc',
    date: '2026-03-05',
    storeName: 'angadcreations.com',
    themeName: 'Wonder',
    code: `async function wiseraddedtocart() {
  const wsres = await fetch('/?section_id=cart-icon-bubble');
  const wsText = await wsres.text();
  const wshtml = document.createElement('div');
  wshtml.innerHTML = wsText;
  const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;
  const cartIconElement = document.querySelector('.wt-header__panel__link#cart-icon-bubble');
  cartIconElement.innerHTML = wsnewBox;
  const wsres1 = await fetch('/?section_id=cart-drawer');
  const wstext1 = await wsres1.text();
  const wstemp1 = document.createElement('div');
  wstemp1.innerHTML = wstext1;
  const newDrawer = wstemp1.querySelector('.cart-drawer');
  const currentDrawer = document.querySelector('.cart-drawer');
  if (!newDrawer || !currentDrawer) return;
  currentDrawer.innerHTML = newDrawer.innerHTML;
  const cartDrawer = document.querySelector('cart-drawer');
  if (cartDrawer && !cartDrawer.isOpen) {
    cartDrawer.toggleDrawerClasses();
  }
}
wiseraddedtocart();                                    
`,
    author: 'jaya',
    themeChanges: '',
    screenshot: ''
  },
  {
    id: 'OvFoZyg91JBiZrzbGlDj',
    date: '2026-03-05',
    storeName: '5bhmfq-t3.myshopify.com',
    themeName: 'Kalles',
    code: `function wiseraddedtocart() {
await document.dispatchEvent(new CustomEvent('cart:reload', { bubbles: true }));
const drawerWs = document.querySelector('hdt-cart-drawer')
drawerWs .open()
}
wiseraddedtocart()
                                                                        `,
    author: 'Deepika',
    themeChanges: '',
    screenshot: ''
  },
  {
    id: 'LPFEj2KZJTIowoiqM5ML',
    date: '2026-03-05',
    storeName: 'blingqueen-in.myshopify.com',
    themeName: 'Impulse',
    code: `function wiseraddedtocart() {
  new theme.CartDrawer();
  $('.js-drawer-open-cart span').trigger('click');
}
 wiseraddedtocart();                `,
    author: 'jaya',
    themeChanges: '',
    screenshot: ''
  },
  {
    id: 'Hcc11axSAjiwgzMZDnhd',
    date: '2026-03-05',
    storeName: 'captains-landing.myshopify.com',
    themeName: 'Dawn',
    code: ` async function wiseraddedtocart() {
    const wsres = await fetch('/?section_id=cart-icon-bubble');
    const wsText = await wsres.text();
    const wshtml = document.createElement('div');
    wshtml.innerHTML = wsText;
    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;
    const cartIconElement = document.querySelector('#cart-icon-bubble.header__icon--cart');
    cartIconElement.innerHTML = wsnewBox;
    const wsrescart = await fetch('/?section_id=cart-drawer');
    const wstextcart = await wsrescart.text();
    const wshtmlcart = document.createElement('div');
    wshtmlcart.innerHTML = wstextcart;
    const wsnewBoxCart = wshtmlcart.querySelector('.drawer__inner').innerHTML;
    document.querySelector('.drawer__inner').innerHTML = wsnewBoxCart;
    const wsopener = document.querySelector('cart-drawer');
    wsopener.open();
    document.querySelector('cart-drawer').classList.remove('is-empty');
  }

wiseraddedtocart();
                                                                                                                                                                                                                                                                 `,
    author: 'jaya',
    themeChanges: '',
    screenshot: ''
  },
  {
    id: 'chD6aVg61gCBwIppJozJ',
    date: '2026-03-02',
    storeName: 'raffi-online.myshopify.com',
    themeName: 'Ella',
    code: `function wiseraddedtocart() {
  $.getJSON('/cart.js', function (cart) {

    if (typeof wsHaloJs !== "undefined") {
      if (window.page_name === 'cart') {
        wsHaloJs.updateCart(cart);
      } else {
        wsHaloJs.updateSidebarCart(cart);
      }
    }

    var cartLink = document.querySelector("a[href='/cart']");
    if (cartLink) {
      cartLink.click();
    }
  });
}

wiseraddedtocart();`,
    author: 'deepika',
    themeChanges: 'added var wsHaloJs = halo; variable in theme.js',
    screenshot: ''
  },
  {
    id: '9JQVKhB1lesF6jMS7J1P',
    date: '2026-02-23',
    storeName: 'http://e0du0i-1q.myshopify.com/',
    themeName: 'Horizon',
    code: `                                        async function wiserAddedToCart() {

    const wsres = await fetch('/?section_id=header');
    const wsText = await wsres.text();

    const wshtml = document.createElement('div');
    wshtml.innerHTML = wsText;

    const wsnewBox = wshtml.querySelector('cart-items-component')?.innerHTML;
    const cartIconText = wshtml.querySelector('cart-icon')?.innerHTML;

    const cartDrawer = document.querySelector('cart-drawer-component');
    if (!cartDrawer) return;

    const cartDrawerItems = cartDrawer.querySelector('cart-items-component');
    const cartIcon = cartDrawer.querySelector('cart-icon');

    if (cartDrawerItems && wsnewBox) {
      cartDrawerItems.innerHTML = wsnewBox;
    }

    if (cartIcon && cartIconText) {
      cartIcon.innerHTML = cartIconText;
    }
    const dialog = cartDrawer.querySelector('dialog, .cart-drawer__dialog');
    dialog?.classList.remove('cart-drawer--empty');
    if (typeof cartDrawer.open === 'function') {
      cartDrawer.open();
    }
}
wiserAddedToCart();                                    `,
    author: 'Deepika',
    themeChanges: '',
    screenshot: ''
  },
  {
    id: '4OaykCT8q7CCNwdLqC7N',
    date: '2026-02-23',
    storeName: 'craze-india.myshopify.com',
    themeName: 'Ella',
    code: `function wiseraddedtocart() {
  $.getJSON('/cart.js', function (cart) {
    if (window.page_name === 'cart') {
      wsHaloJs.updateCart(cart);
    } else {
      wsHaloJs.updateSidebarCart(cart);
    }

    var cartLink = document.querySelector('a[href="/cart"]');
    if (cartLink) {
      cartLink.click();
    }
  });
}
`,
    author: 'Deepika',
    themeChanges: '',
    screenshot: ''
  }
]