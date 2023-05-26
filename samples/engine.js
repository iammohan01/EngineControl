const domain_rules = 
{
    1:{
        'rule-name':'Analyse Images',
        'enabled':true,
        'input-type':'boolean',
        'value':true
    },
    2:{
        'rule-name':' Include Sub Domain Ex: cliq.zoho.com',
        'enabled':true,
        'input-type':'list',
        'value':['*.zoho.com/*']
    },
    3:
    {
        'rule-name':'Exclude Sub Domain Ex: internal.google.com',
        'enabled':false,
        'input-type':'list',
        'value':[]
    },
    4:
    {
        'rule-name':'Limit nested link crawling',
        'enabled':false,
        'input-type':'int',
        'value':-1
    },
    5:
    {
        'rule-name':'Include Help pages',
        'enabled':true,
        'input-type':'boolean',
        'value':true
    },
    6:
    {
        'rule-name':'Include Blog pages',
        'enabled':true,
        'input-type':'boolean',
        'value':true
    },
    7:
    {
        'rule-name':'Analyse Mobile and Desktop contents seperatly *0 - both , 1 - mobile only , 2 - desktop only',
        'enabled':true,
        'input-type':'int',
        'value':0
    },
    8:
    {
        'rule-name':'Analyze this domain in intervals of X days.',
        'enabled':true,
        'input-type':'int',
        'value':50
    },
    9:
    {
        'rule-name':'Archive old pages and informations instead of deleting',
        'enabled':false,
        'input-type':'boolean',
        'value':false
    },
    10:
    {
        'rule-name':'Analyse from diffent locale',
        'enabled':false,
        'input-type':'list',
        'value':[]
    },
    11:
    {
        'rule-name':'Make a notification when failure',
        'enabled':false,
        'input-type':'list',
        'value':[]
    },
    12:
    {
        'rule-name':'Index pages with multiple languages',
        'enabled':false,
        'input-type':'list',
        'value':[]
    },
}

const engine = {
    user: 'Mohan',
    engines: [
        {
            'engine-name': 'Engine 01',
            'engine-id': 1,
            'domains':
            [
                {
                    'url' : 'zoho.com',
                    'total-pages': 15000,
                    'indexed-pages':14800,
                    'failed-pages':20,
                    'last-indexed' : 9876543210,
                    'rules':{...domain_rules}
                },
                {
                    'url' : 'google.com',
                    'total-pages': 323423,
                    'indexed-pages':323000,
                    'failed-pages':260,
                    'last-indexed' : 6789054321,
                    'rules':{...domain_rules}
                }
            ]
        },
        {
            'engine-name': 'Engine 02',
            'engine-id': 11
        },
        {
            'engine-name': 'Engine 01',
            'engine-id': 111
        }
    ]
};
let newEngine ;