import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* Exact used above so it doesn't render on individual portfolio projects */}
        <Route path="/portfolio/:id" component={Project} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}
