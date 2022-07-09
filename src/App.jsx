import * as React from 'react'
import { STATUS } from './Api'
import { FILTER_BY } from './Filter'
import { Dashboard } from './Dashboard'

export const App = () => {
  const [filterBy, setFilterBy] = React.useState(FILTER_BY.ALL)
  const onChangeFilter = (event) => { setFilterBy(event.target.value) }

  const [data, setData] = React.useState({ status: STATUS.LOADING })
  React.useEffect(() => {
    fetch('http://www.mocky.io/v2/5c62e7c33000004a00019b05')
      .then(response => { if (response.ok) { return response } else { throw new Error() } })
      .then(response => response.json())
      .then(json => setData({ status: STATUS.FETCHED, json }))
      .catch(() => setData({ status: STATUS.ERROR }))
  }, [])

  return <Dashboard data={data} filterBy={filterBy} onChangeFilter={onChangeFilter} />
}
