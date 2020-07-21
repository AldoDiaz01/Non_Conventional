--Load dataset with column names and datatypes
stock_records = LOAD '/user/hirw/input/stocks' USING PigStorage(',') as (exchange:chararray, symbol:chararray, date:datetime, open:float, high:float, low:float, close:float,volume:int, adj_close:float);

--Group records by symbol
grp_by_sym = GROUP stock_records BY symbol;

--Calculate maximum closing price
max_closing = FOREACH grp_by_sym GENERATE group, MAX(stock_records.close) as maxclose;

--Store output
STORE max_closing INTO 'output/pig/stocks' USING PigStorage(',');