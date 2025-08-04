import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <React.Fragment>
            <div>Hello "__root"!</div>
            <Link to="/" className='[&.active]:font-bold'>
                Home
            </Link>{" "}
            <Link to="/about" className='[&.active]:font-bold'>
                About
            </Link>{" "}
            <Link to="/products" className='[&.active]:font-bold'>
                Products
            </Link>{" "}
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </React.Fragment>
    )
}
