import ErrorBoundary from "./ErrorBoundary";
import SimpleReactComp from "./simpleReactComp";

import React from 'react'

export default function SimpleReactCompWithErrorBoundary() {
    return (
        <ErrorBoundary>
            <SimpleReactComp />
        </ErrorBoundary>
    )
}
