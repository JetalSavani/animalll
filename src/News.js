import React from 'react'

export default function News() {
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>News</div>
  )
}
