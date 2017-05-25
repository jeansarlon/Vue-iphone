const mainLang = 'en-US'
let lang =  function() {
   if (navigator.languages && navigator.languages.length) {
      if (isOther(navigator.languages[0])) {
         return navigator.languages[0]
      }
      return mainLang
   } else {
      if (isOther(navigator.language)) {
         return navigator.language
      }
      return mainLang
   }
}
let isOther = function(lang) {
   let opt = ['pt','pt-BR','en-US']
   if (opt.indexOf(lang) > -1) {
      return true;
   }
   return false;
}

let user = {
   info: {
      followers:{
         'pt-BR': 'Seguidores',
         'pt': 'Seguidores',
         'en-US':'followers'
      },
      following: {
         'pt-BR': 'Seguindo',
         'pt': 'Seguindo',
         'en-US':'following'
      },
      'public_repos': {
         'pt-BR': 'Repositorios',
         'pt': 'Repositorios',
         'en-US':'Repositories'
      }
   },
   moreInfo: {
      location:{
         'pt-BR': 'Localidade',
         'pt': 'Localidade',
         'en-US':'Location'
      },
      html_url: {
         'pt-BR': 'URL',
         'pt': 'URL',
         'en-US':'URL'
      },
      'following': {
         'pt-BR': 'Seguindo',
         'pt': 'Seguindo',
         'en-US':'following'
      }
   }
}

export const userInfo = (attr) => {
   return user.info[attr][lang()]
}
export const userMoreInfo = (attr) => {
   return user.moreInfo[attr][lang()]
}




let app = {
   buttons: {
      back: {
         'pt-BR': 'Voltar',
         'pt': 'Voltar',
         'en-US': 'Back'
      },
      more: {
         'pt-BR': 'Mais informações',
         'pt': 'Mais informações',
         'en-US': 'More...'
      },
      unlock: {
         'pt-BR': 'Clique para desbloquear',
         'pt': 'Clique para desbloquear',
         'en-US': 'Click to unlock'
      }
   }
}
export const appButtons = (attr) => {
      return app.buttons[attr][lang()]
   }
