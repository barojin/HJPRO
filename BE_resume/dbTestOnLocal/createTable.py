import boto3


def create_profile_table(dynamodb=None):
    if not dynamodb:
        dynamodb = boto3.resource('dynamodb',
                                  endpoint_url='http://localhost:8000',
                                  region_name='dummy',
                                  aws_access_key_id='dummy',
                                  aws_secret_access_key='dummy')

    table = dynamodb.create_table(
        TableName='Profile',
        KeySchema=[
            {
                'AttributeName': 'name',
                'KeyType': 'HASH'  # Partition key
            },
            {
                'AttributeName': 'email',
                'KeyType': 'RANGE'  # Sort key
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'name',
                'AttributeType': 'N'
            },
            {
                'AttributeName': 'email',
                'AttributeType': 'S'
            },

        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 10,
            'WriteCapacityUnits': 10
        }
    )
    return table

def create_work_table(dynamodb=None):
    if not dynamodb:
        dynamodb = boto3.resource('dynamodb',
                                  endpoint_url='http://localhost:8000',
                                  region_name='dummy',
                                  aws_access_key_id='dummy',
                                  aws_secret_access_key='dummy')

    table = dynamodb.create_table(
        TableName='Work',
        KeySchema=[
            {
                'AttributeName': 'title',
                'KeyType': 'HASH'  # Partition key
            },
            {
                'AttributeName': 'type',
                'KeyType': 'RANGE'  # Sort key
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'title',
                'AttributeType': 'N'
            },
            {
                'AttributeName': 'type',
                'AttributeType': 'S'
            },

        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 10,
            'WriteCapacityUnits': 10
        }
    )
    return table


if __name__ == '__main__':
    profile_table = create_profile_table()
    print("profile_table status:", profile_table.table_status)
    work_table = create_work_table()
    print("work_table status:", work_table.table_status)