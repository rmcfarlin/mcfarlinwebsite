from django.contrib import admin
from .models import Acct, Dev, Cert


class CertAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'class_name',
                    'photo')
    list_display_links = ('id', 'title')
    list_filter = ('class_name',)
    list_editable = ('class_name',)
    search_fields = ('title', 'class_name')
    list_per_page = 25

admin.site.register(Acct)
admin.site.register(Dev)
admin.site.register(Cert, CertAdmin)
