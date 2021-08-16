from django.test import TestCase
import boto3
# Create your tests here.

def main():
    # # create client
    # ddb = boto3.resource('dynamodb',
    #                      endpoint_url='http://localhost:8000',
    #                      region_name='dummy',
    #                      aws_access_key_id='dummy',
    #                      aws_secret_access_key='dummy')
    #
    # # create the table
    # ddb.create_table(TableName='Transactions',
    #                  AttributeDefinitions=[
    #                      {
    #                         'AttributeName': 'TransactionId',
    #                         'AttributeType': 'S'
    #                      }
    #                  ],
    #                  KeySchema=[
    #                      {
    #                          'AttributeName': 'TransactionId',
    #                          'KeyType': 'HASH'
    #                      }
    #                  ],
    #                  ProvisionedThroughput={
    #                      'ReadCapacityUnits': 10,
    #                      'WriteCapacityUnits': 10
    #                  }
    #                  )
    # print('Successfully created Table')
    #
    # table = ddb.Table('Transactions')
    #
    # input = {'TransactionId': '9a0', 'State': 'PENDING', 'Amount': 50}
    #
    # table.put_item(Item=input)
    # print('Successfully put item')
    ddb = boto3.resource('dynamodb',
                         endpoint_url='http://localhost:8000',
                         region_name='dummy',
                         aws_access_key_id='dummy',
                         aws_secret_access_key='dummy')
    scanResponse = ddb.Table('Transactions').scan(TableName='Transactions')
    items =scanResponse['Items']
    for item in items:
        print(item)
main()


