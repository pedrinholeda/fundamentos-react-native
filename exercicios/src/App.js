import React from "react"
import { Text , SafeAreaView} from "react-native"

import Primeiro from "./components/Primeiro"
import X, {  Comp2, Comp3 } from "./components/Multi"

function App(){
    return( 
    <SafeAreaView>
         <Primeiro/>
         <X/>
         <Comp2/>
         <Comp3/>
    </SafeAreaView>
    )
}

export default App