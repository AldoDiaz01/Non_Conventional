### www.hadoopinrealworld ###
### Pig Script To Compute Max Close Price By Stock Symbol ###

HDFS Input Location: 
/user/hirw/input/stocks
HDFS Output Location (relative to user): 
output/pig/stocks

Delete Output Directory: 
hadoop fs -rm -r output/pig/stocks

Submit Pig Script:
pig /hirw-starterkit/pig/stocks/max-closeprice.pig

View Result:
hadoop fs -cat output/pig/stocks/part-r-00000
