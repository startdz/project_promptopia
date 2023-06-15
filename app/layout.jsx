// import '@/styles/global.css'
import '@styles/global.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='id'>
      <body>
        
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>


      </body>
    </html>
  )
}
export default RootLayout