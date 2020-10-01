import React from 'react'

import { ExampleComponent, ImageComponent } from 'nlds-react-components'
import 'nlds-react-components/dist/index.css'

const App = () => {
  return (
    <div>
      <ExampleComponent text="Create React Library Example 😄" />
      <ImageComponent/>
    </div>
  );
}

export default App
