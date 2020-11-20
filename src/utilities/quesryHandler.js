export const CreateQueryString = (parameter, value , loc) => {
    let url
    if (loc.search === '') {
      url = `?${parameter}=${value}`
    } else {
      url = loc.search + `&${parameter}=${value}`
    }
    return url;
  }

  export const DeleteQueryString = (parameter,loc) => {
    const URL = loc.search;
    const a = window.document.createElement('a')
    a.href = URL
    let params = new URLSearchParams(a.search)
    params.delete(parameter)
    const first = URL.split("?")[0]
    const newParams = params.toString()
    const withoutparams = `${first}?${newParams}`
    return withoutparams
  }

  export  const ReplaceQueryString = (parameter, value , values) => {
    let urlStr = ""
    let count = 0;
    for (let parms in values) {
      if (parameter === parms) {
        urlStr = urlStr + (count > 0 ? `&${parameter}=${value}` : `${parameter}=${value}`)
      } else {
        urlStr = urlStr + (count > 0 ? `&${parms}=${values[parms]}` : `${parms}=${values[parms]}`)
      }
      count++;
    }
    let query = `?${urlStr}`
    return query;
  }
