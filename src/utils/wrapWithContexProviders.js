import React from 'react';

function wrapWithContextProviders(AppComponent, contextProviders) {
  let wrappedComponent = <AppComponent />;
  contextProviders.forEach(ContextProvider => {
    wrappedComponent = <ContextProvider>{wrappedComponent}</ContextProvider>;
  });
  return wrappedComponent;
}

export default wrapWithContextProviders;