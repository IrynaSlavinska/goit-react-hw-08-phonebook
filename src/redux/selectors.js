export const selectContacts = state => state.contacts.contacts;

export const selectFilterValue = state => state.filter.filter;

export const selectError = state => state.contacts.error;

export const selectIsLoading = state => state.contacts.isLoading;
