# -*- coding: utf-8 -*-
#################################################################################
# Author      : POWr (<www.powr.io>)
# Copyright(c): 2019-Present POWr Inc.
# All Rights Reserved.
#
# This program is copyright property of the author mentioned above.
# You can`t redistribute it and/or modify it.
#
#################################################################################

{
    'name': 'Social Feed',
    'summary': 'Get more Likes and Followers with automatic social streaming',
    'version': '1.0',
    'description': """POWr Plugins Social Feed.""",
    'author': 'POWr.io',
    'support': 'support@powr.io',
    'category': 'website',
    'website': "https://www.powr.io",
    'depends': ['base', 'website', 'odoo-powr-plugins'],
    'data': [
        'views/template.xml',
        'views/website.xml',
    ],
    'installable': True,
    'auto_install': False,
}
# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4:
