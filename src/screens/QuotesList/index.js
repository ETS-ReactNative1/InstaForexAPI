import React, { useContext } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { QuotesListContext } from '../../context/quotesListContext';
import ErrorIndicator from "../../components/ErrorIndicator";
import Quote from '../../components/Quote';

const QuotesList = () => {
    const { data, isError, isLoading } = useContext(QuotesListContext);

    const renderItem = ({ item }) => <Quote symbol={item.symbol} />;
    const keyExtractor = item => item.symbol;

    return (
        <View>
            {isError && <ErrorIndicator />}

            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            )}
        </View>
    );
};

export default QuotesList;
