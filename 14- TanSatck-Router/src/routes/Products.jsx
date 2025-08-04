import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/Products')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/Products"!
      <br />
      <Link to="/product/1">Go to Product 1</Link>
      <br />
      <Link to="/product/2">Go to Product 2</Link>
      <br />
      <Link to="/product/3">Go to Product 3</Link>
      <br />
      <Link to="/product/4">Go to Product 4</Link>
    </div>)
}
