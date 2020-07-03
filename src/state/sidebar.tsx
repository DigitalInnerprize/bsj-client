import * as React from 'react'
import createCtx from '../utils/createCtx'

interface ContextState {
  drawerState: boolean
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

const [useSidebarCtx, SidebarCtxProvider] = createCtx<ContextState>()

function SidebarProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [drawerState, setDrawerState] = React.useState(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
    setDrawerState(open)
  }

  return <SidebarCtxProvider value={{ drawerState, toggleDrawer }}>{children}</SidebarCtxProvider>
}

export { useSidebarCtx, SidebarProvider }
