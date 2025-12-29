'use client';

import React, { createContext, useContext } from 'react';

type Messages = Record<string, string>;

const I18nContext = createContext<Messages>({});

export function I18nProvider({
    messages,
    children,
}: {
    messages: Messages;
    children: React.ReactNode;
}) {
    return <I18nContext.Provider value={messages}>{children}</I18nContext.Provider>;
}

export function useT() {
    const messages = useContext(I18nContext);
    return (key: string) => messages[key] ?? key;
}


