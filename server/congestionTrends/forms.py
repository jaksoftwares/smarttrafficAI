from django import forms
from .models import TrafficEntry

class TrafficEntryForm(forms.ModelForm):
    class Meta:
        model = TrafficEntry
        fields = '__all__'
        widgets = {
            'hour': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'e.g. 08:00'}),
            'car_count': forms.NumberInput(attrs={'class': 'form-control', 'placeholder': 'Enter car count'}),
        }
